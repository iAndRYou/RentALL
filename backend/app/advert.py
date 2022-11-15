from fastapi import APIRouter, Query
from .models import Advert
from typing import List


router = APIRouter()



@router.get("/adverts", response_model=List[Advert], tags=['adverts'])
async def get_adverts(lower_price_bound: float = Query(default=None), upper_price_bound: float = Query(default=None)):
    advert = Advert()
    #TODO: get an actual list of adverts
    return [advert] 



@router.post("/adverts", tags=['adverts'])
async def post_advert(advert: Advert):
    return advert


    
@router.get("/adverts/{advertId}", response_model = Advert, tags=['adverts'])
async def get_advert(advertId: int, advert: Advert):
    return advert



@router.put("/adverts/{advertId}", tags=['adverts'])
async def update_user_advert(advertId: int, advert: Advert):
    return advert



@router.delete("/adverts/{advertId}", tags=['adverts'])
async def delete_user_advert(advertId: int):
    #TODO: delete from database logic
    return{"ok": True}


