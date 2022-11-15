from fastapi import FastAPI
from pydantic import BaseModel
import app.user as user



app = FastAPI()

app.include_router(user.router)


class Advert(BaseModel):
    advertId: int = Field(default=...)
    latitute: float = Field(default=...)
    longitude: float = Field(default=...)
    date: str = Field(default=...)
    price: int = Field(default=...)
    travel_time: int = Field(default=...)
    authorId: int = Field(default=...)
    description: str | None = None
    title: str = Field(default=...)
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


