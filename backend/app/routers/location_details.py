from fastapi import APIRouter, Path, Body, Query
import random
# import googlemaps

from ..models import LocationDetails

# API_key = ''
# gmaps = googlemaps.Client(key=API_key)

router = APIRouter()

@router.get('/location_details/{advert_id}', response_model=LocationDetails, tags=['location details'])
async def get_location_details(advert_id: int = Path(), destination_latitude: float = Query(alias="latitude"), destination_longitude: float = Query(alias="longitude")) -> float:
    #TODO: get location details from Google Maps API
    
    return round(3600*random.random(), 0) # in seconds

@router.post('/score/{advert_id}', response_model=int, tags=['location details'])
async def fetch_advert_score(advert_id: int = Path(), location_details: LocationDetails = Body()) -> float:
    #TODO: calculate advert score based on location details
    
    return round(100*random.random(), 0)

@router.get('/coordinates')
async def get_coordinates(address: str = Query(default=...)):
    # gmaps.geocode(address)
    return {'latitude': 90.0, 'longitude': 100.0}