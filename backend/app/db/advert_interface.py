'''
Advert database structure:
advert_id serial PRIMARY KEY,
latitude FLOAT,
longitude FLOAT,
date VARCHAR,
price FLOAT,
author_id INT,
description VARCHAR,
title VARCHAR,
images VARCHAR[],
address VARCHAR
'''


import psycopg2
from fastapi import APIRouter, Query, Path, Depends, Body, Form, HTTPException
from typing import Optional, List
import datetime

from ..models import Advert, User
from .connection import get_connection
from ..googleapi import location_details


class DBGetAdvert:
    '''
    Class for getting adverts from database
    '''

    @get_connection
    def get_advert_by_id(cursor, advert_id: int) -> Optional[Advert]:
        '''
        Get advert from database by id
        '''

        cursor.execute("SELECT * FROM adverts WHERE advert_id = %s;", (advert_id,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            return None
            # raise HTTPException(status_code=404, detail="Advert not found")
        print(rows)
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
            "address": rows[0][9]
        })

        return advert


    @get_connection
    def get_adverts_in_given_price(cursor, lower_price_bound: int, upper_price_bound: int) -> Optional[List[Advert]]:
        '''
        Get adverts from database between given price bounds
        '''

        cursor.execute("SELECT * FROM adverts WHERE price >= %s AND price <= %s;", (lower_price_bound,upper_price_bound))
        rows = cursor.fetchall()
        # if len(rows) == 0:
        #     cursor.close()
        #     conn.close()
        #     return None
            # raise HTTPException(status_code=404, detail="Advert not found")
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
            "address": row[9]
            })
            adverts.append(advert)

        return adverts


    @get_connection
    def get_adverts_by_author(cursor, current_user: User):
        '''
        Get adverts from database by author
        '''

        author_id = current_user.user_id
        cursor.execute("SELECT * FROM adverts WHERE author_id = %s;", (author_id,))
        rows = cursor.fetchall()
        
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
            "address": row[9]
            })
            adverts.append(advert)

        return adverts
    

class DBEditAdvert:

    @get_connection
    def add_advert(cursor, advert: Advert, current_user: User) -> None:
        '''
        Insert new advert into database
        '''

        if advert.author_id is None:
            advert.author_id = current_user.user_id

        if advert.date is None:
            advert.date = datetime.date.today()

        if advert.latitude is None or advert.longitude is None:
            advert.latitude, advert.longitude = location_details.fetch_coordinates(advert.address)
        

        if advert.advert_id is None:
            cursor.execute("INSERT INTO adverts (latitude, longitude, date, price, author_id, description, title, images, address) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING advert_id;", 
            (advert.latitude, advert.longitude, advert.date, advert.price, advert.author_id, advert.description, advert.title, advert.images, advert.address))
            advert.advert_id = cursor.fetchone()[0]
        else:
            cursor.execute("INSERT INTO adverts (advert_id, latitude, longitude, date, price, author_id, description, title, images, address) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);", 
            (advert.advert_id, advert.latitude, advert.longitude, advert.date, advert.price, advert.author_id, advert.description, advert.title, advert.images, advert.address))        

        return advert


    @get_connection
    def delete_advert(cursor, advert_id: int, current_user: User) -> None:
        '''
        Delete advert from database
        '''

        cursor.execute("SELECT * FROM adverts WHERE advert_id = %s;", (advert_id,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="Advert not found")
        author_id = int(rows[0][5])

        if current_user.user_id != author_id:
            raise HTTPException(status_code=403, detail="You are not the author of this advert")


        cursor.execute("DELETE FROM adverts WHERE advert_id = %s;", (advert_id,))


    @get_connection
    def update_advert(cursor, advert_id: int, advert: Advert, current_user: User) -> None:
        '''
        Update advert in database
        '''

        cursor.execute("SELECT * FROM adverts WHERE advert_id = %s;", (advert_id,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="Advert not found")
        old_latitude = float(rows[0][1])
        old_longitude = float(rows[0][2])
        author_id = int(rows[0][5])
        old_address = rows[0][9]

        if current_user.user_id != author_id:
            raise HTTPException(status_code=403, detail="You are not the author of this advert")


        advert.advert_id = advert_id

        if advert.author_id is None:
            advert.author_id = current_user.user_id

        if advert.date is None:
            advert.date = datetime.date.today()

        if advert.address != old_address:
            advert.latitude, advert.longitude = location_details.fetch_coordinates(advert.address)
        else:
            advert.latitude, advert.longitude = old_latitude, old_longitude


        cursor.execute("UPDATE adverts SET latitude = %s, longitude = %s, date = %s, price = %s, author_id = %s, description = %s, title = %s, images = %s, address = %s WHERE advert_id = %s;", 
        (advert.latitude, advert.longitude, advert.date, advert.price, advert.author_id, advert.description, advert.title, advert.images, advert.address, advert.advert_id))

        return advert