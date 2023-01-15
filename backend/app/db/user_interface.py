'''
User database structure:
user_id serial PRIMARY KEY,
email VARCHAR,
fullname VARCHAR,
phone_number VARCHAR,
password_hash VARCHAR
'''


import psycopg2
from fastapi import APIRouter, Query, Path, Depends, Body, Form, HTTPException
from typing import Optional, List

from ..models import User, UserInDB
from .connection import get_connection


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
            return None
            # raise HTTPException(status_code=404, detail="User not found")
        user = User(**{
            "user_id": rows[0][0],
            "email": rows[0][1],
            "fullname": rows[0][2],
            "phone_number": rows[0][3],
        })

        return user
    
    @get_connection
    def get_users_by_ids(cursor, user_ids: List[int]) -> List[User]:
        '''
        Get user from database by id
        '''

        users = []
        for user_id in user_ids:
            cursor.execute("SELECT * FROM users WHERE user_id = %s;", (user_id,))
            rows = cursor.fetchall()
            user = User(**{
                "user_id": rows[0][0],
                "email": rows[0][1],
                "fullname": rows[0][2],
                "phone_number": rows[0][3],
            })
            users.append(user)

        return users


    @get_connection
    def get_user_by_email(cursor, email: str) -> Optional[User]:
        '''
        Get user from database by email
        '''

        cursor.execute("SELECT * FROM users WHERE email = %s;", (email,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            return None
            # raise HTTPException(status_code=404, detail="User not found")
        user = User(**{
            "user_id": rows[0][0],
            "email": rows[0][1],
            "fullname": rows[0][2],
            "phone_number": rows[0][3],
        })

        return user


    @get_connection
    def get_dbuser_by_email(cursor, email: str) -> Optional[UserInDB]:
        '''
        Get user with password hash from database by email
        '''

        cursor.execute("SELECT * FROM users WHERE email = %s;", (email,))
        rows = cursor.fetchall()
        if len(rows) == 0:
            return None
            # raise HTTPException(status_code=404, detail="User not found")
        user = UserInDB(**{
            "user_id": rows[0][0],
            "email": rows[0][1],
            "fullname": rows[0][2],
            "phone_number": rows[0][3],
            "password_hash": rows[0][4],
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
            return None
            # raise HTTPException(status_code=404, detail="User not found")
        user = User(**{
            "user_id": rows[0][0],
            "email": rows[0][1],
            "fullname": rows[0][2],
            "phone_number": rows[0][3],
        })

        return user
    

    @get_connection
    def get_all_users(cursor) -> list[User]:
        '''
        Get all users from database
        '''

        cursor.execute("SELECT * FROM users;")
        rows = cursor.fetchall()
        users = []
        for row in rows:
            user = User(**{
                "user_id": row[0],
                "email": row[1],
                "fullname": row[2],
                "phone_number": row[3], 
            })
            users.append(user)

        return users
        
    

class DBEditUser:
    '''
    Class for adding and deleting users in database
    '''

    @get_connection
    def add_user(cursor, user: UserInDB) -> None:
        '''
        Add user to database
        '''

        cursor.execute("INSERT INTO users (email, fullname, phone_number, password_hash) VALUES (%s, %s, %s, %s);", (user.email, user.fullname, user.phone_number, user.password_hash))


    @get_connection
    def delete_user(cursor, user_id: int, current_user: User) -> None:
        '''
        Delete user from database
        '''

        if current_user.user_id != user_id:
            raise HTTPException(status_code=403, detail="You cannot delete other users")

        cursor.execute("DELETE FROM users WHERE user_id = %s;", (user_id,))