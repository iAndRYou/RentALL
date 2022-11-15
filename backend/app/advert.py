from fastapi import FastAPI, APIRouter
from models import Advert


router = APIRouter()





@router.get("/adverts", tags=['adverts'])
async def get_adverts():
    return {"data": []}

@router.post("/adverts", tags=['adverts'])
async def post_advert(advert: Advert):
    return advert
    
@router.get("/adverts/{advertId}", tags=['adverts'])
async def get_advert(advertId: int, advert: Advert):
    return {"advertId": advertId}

@router.put("/adverts/{advertId}", tags=['adverts'])
async def update_user_advert(advertId: int, advert: Advert):
    return advert

@router.delete("/adverts/{advertId}", tags=['adverts'])
async def delete_user_advert(advertId: int):
    pass


