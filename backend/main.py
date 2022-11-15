from fastapi import FastAPI
from pydantic import BaseModel
from app.user import *



app = FastAPI()

app.include_router(router)


class Advert(BaseModel):
    advertId: int
    latitute: float
    longitude: float
    date: str
    price: int
    travel_time: int
    authorId: int
    description: str | None = None
    title: str
    images: list[str] | None = None
    

@app.get("adverts", tags=['adverts'])
async def get_adverts():
    return {"data": []}

@app.post("/adverts", tags=['adverts'])
async def post_advert(advert: Advert):
    return advert
    
@app.get("/adverts/{advertId}", tags=['adverts'])
async def get_advert(advertId: int, advert: Advert):
    return {"advertId": advertId}

@app.put("adverts/{advertId}", tags=['adverts'])
async def update_user_advert(advertId: int, advert: Advert):
    return advert

@app.delete("adverts/{advertId}", tags=['adverts'])
async def delete_user_advert(advertId: int):
    pass


