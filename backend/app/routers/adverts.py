from fastapi import APIRouter, Query, Path, Depends, Body, Form, HTTPException
from typing import List
from ..models import Advert, User, Token
from ..db.advert_interface import DBGetAdvert, DBEditAdvert
from ..auth.jwt_handler import decode_token 

router = APIRouter()


@router.get("/adverts", response_model=List[Advert], tags=['adverts'])
async def get_adverts(lower_price_bound: float = Query(default=None), upper_price_bound: float = Query(default=None)):
    '''
    Get adverts by price and location
    '''
    
    if lower_price_bound is None and upper_price_bound is None:
        return DBGetAdvert.get_adverts_in_given_price(0, 1000000000)
    elif lower_price_bound is None:
        return DBGetAdvert.get_adverts_in_given_price(0, upper_price_bound)
    elif upper_price_bound is None:
        return DBGetAdvert.get_adverts_in_given_price(lower_price_bound, 1000000000)
    else:
        return DBGetAdvert.get_adverts_in_given_price(lower_price_bound, upper_price_bound)


@router.get("/adverts", response_model=List[Advert], tags=['adverts'])
async def get_user_adverts(current_user: User = Depends(decode_token)):
    '''
    Get adverts of current user
    '''

    return DBGetAdvert.get_adverts_by_author(current_user)


@router.post("/adverts", tags=['adverts'])
async def post_advert(advert: Advert, current_user: User = Depends(decode_token)):
    '''
    Post new advert
    '''

    DBEditAdvert.add_advert(advert)

    return {"message": "Advert added successfully"}
    

@router.get("/adverts/{advert_id}", response_model = Advert, tags=['adverts'])
async def get_advert(advert_id: int = Path()):
    '''
    Get advert by id
    '''

    advert = DBGetAdvert.get_advert_by_id(advert_id)

    if advert is None:
        raise HTTPException(status_code=404, detail="Advert not found")


@router.put("/adverts", tags=['adverts'])
async def update_user_advert(advert: Advert = Body(), current_user: User = Depends(decode_token)):
    '''
    Update advert in the database
    '''
    
    DBEditAdvert.update_advert(advert.advert_id, advert)

    return advert


@router.delete("/adverts/{advert_id}", tags=['adverts'])
async def delete_user_advert(advert_id: int, current_user: User = Depends(decode_token)):
    '''
    Delete advert from the database
    '''

    DBEditAdvert.delete_advert(advert_id, current_user)

    return {"message": "Advert deleted successfully"}
