from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
'''
fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/items/")
async def read_item(skip: int=0, limit: int=10):
    return fake_items_db[skip: skip + limit]

@app.get("/items/{item_id}")
async def read_item(item_id: str, q: Union[str, None] = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}
    '''
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
    

@app.get("adverts")
async def get_adverts(): #do poprawy
    return {"data": []}

@app.post("/adverts")
async def post_advertd(advert: Advert):
    return advert
    
@app.get("/adverts/{advertId}")
async def get_user_advert(advertId: int, advert: Advert):
    return {"advertId": advertId}

@app.put("adverts/{advertId}")
async def update_user_advert(advertId: int, advert: Advert):
    cursor.execute("UPDATE inventory SET quantity = %s WHERE name = %s;", (200, "banana"))
    return advert

@app.delete("adverts/{advertId}")
async def delete_advert(advertId: int):
    pass
