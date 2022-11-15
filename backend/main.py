from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()

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
    

@app.get("adverts")
async def get_adverts(): #do poprawy
    return {"data": []}

@app.post("/adverts")
async def post_advertd(advert: Advert):
    return advert
    
@app.get("/adverts/{advertId}", response_model=Advert)
async def get_user_advert(advertId: int, advert: Advert):
    return {"advertId": advertId}

@app.put("adverts/{advertId}")
async def update_user_advert(advertId: int, advert: Advert):
    return advert

@app.delete("adverts/{advertId}")
async def delete_advert(advertId: int):
    pass
