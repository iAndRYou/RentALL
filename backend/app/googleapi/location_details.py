from fastapi import APIRouter, Path, Body, Query, HTTPException
import random
from enum import Enum
import googlemaps
from typing import List

from ..models import LocationDetails, Advert, AdvertDetailed
from . import googleapiconfig


API_key = googleapiconfig.API_key

if API_key != '':
    gmaps = googlemaps.Client(key=API_key)
else:
    gmaps = None


def fetch_location_details(advert: Advert, destination_latitude: float | None, destination_longitude: float | None) -> LocationDetails:
    if advert.latitude is None or advert.longitude is None or destination_latitude is None or destination_longitude is None:
        travel_time = None
    
    else:
        response = gmaps.distance_matrix(origins=(advert.latitude, advert.longitude), destinations=(destination_latitude, destination_longitude), mode='transit')
        travel_time = response['rows'][0]['elements'][0]['duration']['value'] # in seconds

    return LocationDetails(travel_time=travel_time)


def calculate_adverts_score(adverts_detailed: List[AdvertDetailed]) -> float:
    if len(adverts_detailed) == 0:
        return []

    for i, advert_detailed in enumerate(adverts_detailed):
        component1 = (100/5000)*(5000 - advert_detailed.price)*(advert_detailed.price <= 5000) # linear from score 0 at price 5000 (cutoff) to score 100 at price 0
        if advert_detailed.travel_time is None:
            component2 = 0
        else:
            component2 = (100/3600)*(3600 - advert_detailed.travel_time)*(advert_detailed.travel_time <= 3600) # linear from score 0 at travel time equal to 1 hour (cutoff) to score 100 at travel time equal to zero

        weight1 = 1 # weight factor for component1 
        weight2 = 1 # weight factor for component2
        
        adverts_detailed[i].score = (weight1*component1 + weight2*component2) / (weight1 + weight2)

    all_scores = list(map(lambda x: x.score, adverts_detailed))
    max_score = max(all_scores)
    min_score = min(all_scores)

    if max_score == min_score: # cannot normalize
        for i, advert_detailed in enumerate(adverts_detailed):
            adverts_detailed[i].score = 100

        return adverts_detailed


    # normalize scores
    for i, advert_detailed in enumerate(adverts_detailed):
        adverts_detailed[i].score = 100 / (max_score - min_score) * (adverts_detailed[i].score - min_score)

    return adverts_detailed


def fetch_coordinates(address: str) -> tuple:
    response = gmaps.geocode(address)

    if len(response) == 0:
        return (None, None)

    d = response[0]["geometry"]["location"]

    return (d['lat'], d['lng'])



##### MOCKS #####

def mock_fetch_location_details(advert: Advert, destination_latitude: float | None, destination_longitude: float | None) -> LocationDetails:
    return LocationDetails(travel_time=None)


def mock_calculate_adverts_score(adverts_detailed: List[AdvertDetailed]) -> float:
    if len(adverts_detailed) == 0:
        return []

    for i, advert_detailed in enumerate(adverts_detailed):
        component1 = (100/5000)*(5000 - advert_detailed.price)*(advert_detailed.price <= 5000) # linear from score 0 at price 5000 (cutoff) to score 100 at price 0
        component2 = 0

        weight1 = 1 # weight factor for component1 
        weight2 = 1 # weight factor for component2
        
        adverts_detailed[i].score = (weight1*component1 + weight2*component2) / (weight1 + weight2)

    all_scores = list(map(lambda x: x.score, adverts_detailed))
    max_score = max(all_scores)
    min_score = min(all_scores)

    if max_score == min_score: # cannot normalize
        for i, advert_detailed in enumerate(adverts_detailed):
            adverts_detailed[i].score = 100

        return adverts_detailed


    # normalize scores
    for i, advert_detailed in enumerate(adverts_detailed):
        adverts_detailed[i].score = 100 / (max_score - min_score) * (adverts_detailed[i].score - min_score)

    return adverts_detailed


def mock_fetch_coordinates(address: str) -> tuple:
    return (50.0, 20.0)


##### CHOOSE #####

def choose_mock_functions():
    global fetch_location_details, fetch_coordinates, calculate_adverts_score
    fetch_location_details = mock_fetch_location_details
    fetch_coordinates = mock_fetch_coordinates
    calculate_adverts_score = mock_calculate_adverts_score

if gmaps is None:
    choose_mock_functions()