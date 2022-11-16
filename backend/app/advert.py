from fastapi import APIRouter, Query, Path, Body
from .models import Advert
from typing import List


router = APIRouter()



@router.get("/adverts", response_model=List[Advert], tags=['adverts'])
async def get_adverts(lower_price_bound: float = Query(default=None), upper_price_bound: float = Query(default=None)):
    advert = Advert()
    #TODO: get an actual list of advert
    return [advert] 



@router.post("/adverts", tags=['adverts'])
async def post_advert(advert: Advert):
    return advert


    
@router.get("/adverts/{advert_id}", response_model = Advert, tags=['adverts'])
async def get_advert(advert_id: int = Path()):
    pass



@router.put("/adverts/{advert_id}", tags=['adverts'])
async def update_user_advert(advert_id: int = Path(), advert: Advert = Body()):
    return advert



@router.delete("/adverts/{advert_id}", tags=['adverts'])
async def delete_user_advert(advert_id: int):
    #TODO: delete from database logic
    return{"ok": True}


