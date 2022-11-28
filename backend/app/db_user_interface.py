import psycopg2
from fastapi import APIRouter, Query, Path, Depends, Body, Form, HTTPException
from typing import Optional
from .models import User, UserInDB
from auth.jwt_handler import oauth2_scheme, decode_token


class DatabaseDetails():
    '''
    Class to store database details
    '''
    host = "rentall.postgres.database.azure.com"
    dbname = "postgres"
    user = "Kryson354@rentall"
    password = "Rentall!"
    sslmode = "require"

db = DatabaseDetails()
conn_string = "host={0} user={1} dbname={2} password={3} sslmode={4}".format(db.host, db.user, db.dbname, db.password, db.sslmode)


def get_connection(func):
    '''
    Decorator for getting connection to database
    '''
    
    def wrapper(*args, **kwargs):
        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()
        result = func(cursor, *args, **kwargs)
        cursor.close()
        conn.close()
        return result
    return wrapper

class DBGetUser:
    '''
    Class for getting users from database
    '''

    @get_connection
    def get_user_by_id(cursor, user_id: int) -> Optional[User]:
        '''
        Get user from database by id
        '''
        cursor.execute("SELECT * FROM users WHERE user_id = %s;", (user_id,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="User not found")
        user = User(**{
            "user_id": rows[0][0],
            "email": rows[0][1],
            "phone_number": rows[0][2],
        })

        return user

    @get_connection
    def get_user_by_email(cursor, email: str) -> Optional[User]:
        '''
        Get user from database by email
        '''
        cursor.execute("SELECT * FROM users WHERE email = %s;", (email,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="User not found")
        user = User(**{
            "user_id": rows[0][0],
            "email": rows[0][1],
            "phone_number": rows[0][2],
        })

        return user

    @get_connection
    def get_dbuser_by_email(cursor, email: str) -> Optional[UserInDB]:
        '''
        Get user from database by email
        '''
        cursor.execute("SELECT * FROM users WHERE email = %s;", (email,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="User not found")
        user = UserInDB(**{
            "user_id": rows[0][0],
            "email": rows[0][1],
            "phone_number": rows[0][2],
            "password": rows[0][3]
        })

        return user

    @get_connection
    def get_user_by_phone(cursor, phone: str) -> Optional[User]:
        '''
        Get user from database by phone number
        '''
        cursor.execute("SELECT * FROM users WHERE phone_number = %s;", (phone,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="User not found")
        user = User(**{
            "user_id": rows[0][0],
            "email": rows[0][1],
            "phone_number": rows[0][2],
        })

        return user
    
    @get_connection
    def get_user_by_token(cursor, token: str) -> Optional[User]:


        '''
        Get user from database by token
        '''
        decoded_token = decode_token(token)
        cursor.execute("SELECT * FROM users WHERE user_id = %s;", (decoded_token['sub'],))
        rows = cursor.fetchall()
        if len(rows) == 0:
            raise HTTPException(status_code=404, detail="User not found")
        user = User(**{
            "user_id": rows[0][0],
            "email": rows[0][1],
            "phone_number": rows[0][2],
        })

        return user

class DBAddUser:
    '''
    Class for adding users to database
    '''

    @get_connection
    def add_user(cursor, user: UserInDB) -> None:
        '''
        Add user to database
        '''
        cursor.execute("INSERT INTO users (email, fullname, phone_number, hashed_password) VALUES (%s, %s, %s);", (user.email, user.fullname, user.phone_number, user.password))