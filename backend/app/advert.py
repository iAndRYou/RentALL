from fastapi import APIRouter, Query, Path, Body
from .models import Advert
from typing import List


router = APIRouter()



@router.get("/adverts", response_model=List[Advert], tags=['adverts'])
async def get_adverts(lower_price_bound: float = Query(default=None), upper_price_bound: float = Query(default=None)):
    """Get adverts from the database"""
    get_adverts_query = "SELECT * FROM adverts WHERE price >= {0} AND price <= {1}".format(lower_price_bound, upper_price_bound)
    cursor.execute(get_adverts_query)
    rows = cursor.fetchall()
    adverts = []
    for row in rows:
        advert = Advert(advert_id=row[0], latitude=row[1], longitude=row[2], date=row[3], price=row[4], author_id=row[5], description=row[6], title=row[7], images=row[8])
        adverts.append(advert)
    return adverts




@router.post("/adverts", tags=['adverts'])
async def post_advert(advert: Advert):
    """Post advert to the database"""
    insert_advert_query = "INSERT INTO adverts (latitute, longitude, date, price, author_id, description, title, images) VALUES(%s, %s, %s, %s, %s, %s, %s, %s);" #list dla images
    cursor.execute(insert_advert_query, (advert.latitude, advert.longitude, advert.date, advert.price, advert.author_id, advert.description, advert.title, advert.images))
    conn.commit()
    return {"message": "Advert added successfully"}
    


    
@router.get("/adverts/{advert_id}", response_model = Advert, tags=['adverts'])
async def get_advert(advert_id: int = Path()):
    """Get advert from the database"""
    get_advert_query = "SELECT * FROM adverts WHERE advert_id = {0}".format(advert_id)
    cursor.execute(get_advert_query)
    row = cursor.fetchone()
    advert = Advert(advert_id=row[0], latitude=row[1], longitude=row[2], date=row[3], 
    price=row[4], author_id=row[5], description=row[6], title=row[7], images=row[8])
    return advert



@router.put("/adverts/{advert_id}", tags=['adverts'])
async def update_user_advert(advert_id: int = Path(), advert: Advert = Body()):
    """Update advert in the database"""
    update_advert_query = "UPDATE adverts SET latitute = %s, longitude = %s, date = %s, price = %s, author_id = %s, description = %s, title = %s, images = %s WHERE advert_id = {0}".format(advert_id)
    cursor.execute(update_advert_query, (advert.latitude, advert.longitude, advert.date, advert.price, advert.author_id, advert.description, advert.title, advert.images))
    conn.commit()
    return {"message": "Advert updated successfully"}



@router.delete("/adverts/{advert_id}", tags=['adverts'])
async def delete_user_advert(advert_id: int):
    """Delete advert from the database"""
    delete_advert_query = "DELETE FROM adverts WHERE advert_id = {0}".format(advert_id)
    cursor.execute(delete_advert_query)
    conn.commit()
    return {"message": "Advert deleted successfully"}






