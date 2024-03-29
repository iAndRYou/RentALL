from fastapi import APIRouter, Query, Path, Depends, Body, Form, HTTPException
from typing import List

from ..models import Advert, User, Token, AdvertDetailed
from ..db.advert_interface import DBGetAdvert, DBEditAdvert
from ..db.user_interface import DBGetUser
from ..auth.jwt_handler import decode_token 
from ..googleapi import location_details

router = APIRouter()

DEFAULT_LATITUDE = 50.0
DEFAULT_LONGITUDE = 20.0
eps = 10**(-6) # epsilon; for calculations on floats

def has_default_coordinates(advert: Advert) -> bool:
    return abs(advert.latitude - DEFAULT_LATITUDE) <= eps and abs(advert.longitude - DEFAULT_LONGITUDE) <= eps


@router.get("/adverts", response_model=List[AdvertDetailed], tags=['adverts'])
async def get_adverts_detailed(lower_price_bound: float = Query(default=None), upper_price_bound: float = Query(default=None), destination_address: str = Query(alias='address', default=None)):
    '''
    Get adverts by price and location
    '''

    if lower_price_bound is None:
        lower_price_bound = 0

    if upper_price_bound is None:
        upper_price_bound = 1000000000 # inf

    adverts = DBGetAdvert.get_adverts_in_given_price(lower_price_bound, upper_price_bound)

    author_ids = [advert.author_id for advert in adverts]
    authors = DBGetUser.get_users_by_ids(author_ids)
    
    adverts_detailed = []

    if destination_address is None or destination_address == '':
        destination_latitude, destination_longitude = None, None
    else:
        destination_latitude, destination_longitude = location_details.fetch_coordinates(destination_address)

    for author, advert in zip(authors, adverts):
        # check if advert has default coordinates (before calculation)
        if has_default_coordinates(advert) and destination_latitude is not None and destination_longitude is not None:
            advert = DBEditAdvert.update_advert_coordinates(advert.advert_id, *location_details.fetch_coordinates(advert.address))

        details = location_details.fetch_location_details(advert, destination_latitude, destination_longitude)
        advert_detailed = AdvertDetailed(**advert.dict(), **details.dict(), **author.dict())
        adverts_detailed.append(advert_detailed)

    adverts_detailed = location_details.calculate_adverts_score(adverts_detailed)

    

    return adverts_detailed


@router.get("/adverts/me", response_model=List[Advert], tags=['adverts'])
async def get_user_adverts(current_user: User = Depends(decode_token)):
    '''
    Get adverts of current user
    '''

    return DBGetAdvert.get_adverts_by_author(current_user)


@router.post("/adverts", response_model=Advert, tags=['adverts'])
async def post_advert(advert: Advert, current_user: User = Depends(decode_token)):
    '''
    Post new advert
    '''

    new_advert = DBEditAdvert.add_advert(advert, current_user)

    return new_advert
    

@router.get("/adverts/{advert_id}", response_model=Advert, tags=['adverts'])
async def get_advert(advert_id: int = Path()):
    '''
    Get advert by id
    '''

    advert = DBGetAdvert.get_advert_by_id(advert_id)

    if advert is None:
        raise HTTPException(status_code=404, detail="Advert not found")

    return advert


@router.put("/adverts/{advert_id}", tags=['adverts'])
async def update_user_advert(advert_id: int = Path(), advert: Advert = Body(), current_user: User = Depends(decode_token)):
    '''
    Update advert in the database
    '''
    
    updated_advert = DBEditAdvert.update_advert(advert_id, advert, current_user)

    return updated_advert


@router.delete("/adverts/{advert_id}", tags=['adverts'])
async def delete_user_advert(advert_id: int, current_user: User = Depends(decode_token)):
    '''
    Delete advert from the database
    '''
    
    DBEditAdvert.delete_advert(advert_id, current_user)

    return {"message": "Advert deleted successfully"}
