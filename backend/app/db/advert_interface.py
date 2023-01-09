
import psycopg2
from fastapi import APIRouter, Query, Path, Depends, Body, Form, HTTPException
from typing import Optional, List
from ..models import Advert, User
from .user_interface import DatabaseDetails, get_connection

db = DatabaseDetails()
conn_string = "host={0} user={1} dbname={2} password={3} sslmode={4}".format(db.host, db.user, db.dbname, db.password, db.sslmode)

class DBGetAdvert:
    '''
    Class for getting adverts from database
    '''


    # @get_connection
    def get_advert_by_id(advert_id: int) -> Optional[Advert]:
        '''
        Get advert from database by id
        '''
        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM adverts WHERE advert_id = %s;", (advert_id,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="Advert not found")
        advert = Advert(**{
            "advert_id": rows[0][0],
            "latitude": rows[0][1],
            "longitude": rows[0][2],
            "date": rows[0][3],
            "price": rows[0][4],
            "author_id": rows[0][5],
            "description": rows[0][6],
            "title": rows[0][7],
            "images": rows[0][8],
        })

        # conn.commit()
        cursor.close()
        conn.close()

        return advert
    
    # @get_connection
    def get_adverts_in_given_price(lower_price_bound: int, upper_price_bound: int) -> Optional[List[Advert]]:
        '''
        Get adverts from database in given price
        '''
        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM adverts WHERE price >= %s AND price <= %s;", (lower_price_bound,upper_price_bound))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="Advert not found")
        adverts = []
        for row in rows:
            advert = Advert(**{
            "advert_id": row[0],
            "latitude": row[1],
            "longitude": row[2],
            "date": row[3],
            "price": row[4],
            "author_id": row[5],
            "description": row[6],
            "title": row[7],
            "images": row[8],
            })
            adverts.append(advert)

        # conn.commit()
        cursor.close()
        conn.close()
            
        return adverts
    
class DBEditAdvert:

    # @get_connection
    def add_advert(advert: Advert, current_user: User) -> None:
        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()

        author_id = current_user.user_id


        if advert.advert_id is None:
            cursor.execute("INSERT INTO adverts (latitude, longitude, date, price, author_id, description, title, images) VALUES (%s, %s, %s, %s, %s, %s, %s, %s);", 
            (advert.latitude, advert.longitude, advert.date, advert.price, author_id, advert.description, advert.title, advert.images))
        else:
            cursor.execute("INSERT INTO adverts (advert_id, latitude, longitude, date, price, author_id, description, title, images) VALUES (%s, %s, %s, %s, %s, %s, %s, %s);", 
            (advert.advert_id, advert.latitude, advert.longitude, advert.date, advert.price, author_id, advert.description, advert.title, advert.images))        

        # conn.commit()
        cursor.close()
        conn.close()
    
    # @get_connection
    def delete_advert(advert_id: int, current_user: User) -> None:
        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM adverts WHERE advert_id = %s;", (advert_id,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="Advert not found")
        author_id = rows[0][4]

        if current_user.user_id != author_id:
            raise HTTPException(status_code=403, detail="You are not the author of this advert")


        cursor.execute("DELETE FROM adverts WHERE advert_id = %s;", (advert_id,))

        # conn.commit()
        cursor.close()
        conn.close()

    # @get_connection
    def update_advert(advert_id: int, advert: Advert, current_user: User) -> None:
        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM adverts WHERE advert_id = %s;", (advert_id,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="Advert not found")
        author_id = rows[0][4]

        if current_user.user_id != author_id:
            raise HTTPException(status_code=403, detail="You are not the author of this advert")


        cursor.execute("UPDATE adverts SET latitude = %s, longitude = %s, date = %s, price = %s, author_id = %s, description = %s, title = %s, images = %s WHERE advert_id = %s;", 
        (advert.latitude, advert.longitude, advert.date, advert.price, author_id, advert.description, advert.title, advert.images, advert_id))

        # conn.commit()
        cursor.close()
        conn.close()

        




