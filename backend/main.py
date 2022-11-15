from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import List, Optional
import app.user as user

app = FastAPI()

app.include_router(user.router)


class Advert(BaseModel):
    advertId: int = Field(default=...)
    latitute: float = Field(default=...)
    longitude: float = Field(default=...)
    date: str = Field(default=...)
    price: int = Field(default=...)
    authorId: int = Field(default=...)
    description: Optional[str] = Field(default=...)
    title: str = Field(default=...)
    images: Optional[List[str]] = Field(default=...)

    
@app.get("/")
async def hello():
    return {"hello": "swirze"}

@app.get("/adverts", response_model=List[Advert], tags=['adverts'])
async def get_adverts():
    advert = Advert()
    #TODO: get an actual list of adverts
    return [advert] 



@app.post("/adverts", tags=['adverts'])
async def post_advert(advert: Advert):
    return advert


    
@app.get("/adverts/{advertId}", response_model = Advert, tags=['adverts'])
async def get_advert(advertId: int, advert: Advert):
    return advert



@app.put("adverts/{advertId}", tags=['adverts'])
async def update_user_advert(advertId: int, advert: Advert):
    return advert



@app.delete("adverts/{advertId}", tags=['adverts'])
async def delete_user_advert(advertId: int):
    #TODO: delete from database logic
    return{"ok": True}


