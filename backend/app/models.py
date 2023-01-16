from pydantic import BaseModel, EmailStr, Field
import datetime
from typing import Optional, List


class LocationDetails(BaseModel):
    travel_time: float = Field(default=None) # travel time in seconds
    score: float = Field(default=None)


class Advert(BaseModel):
    advert_id: int = Field(default=None)
    latitude: float = Field(default=None)
    longitude: float = Field(default=None)
    date: datetime.date = Field(default=None)
    price: float = Field(default=...)
    author_id: int = Field(default=None)
    description: str = Field(default=...)
    title: str = Field(default=...)
    images: List[str] = Field(default=...)
    address: str = Field(default=...)


class User(BaseModel):
    user_id: int | None = Field(default=None)
    email: str = Field(default=...)
    fullname: str = Field(default=...)
    phone_number: str = Field(default=...)


class UserInput(BaseModel):
    '''User model for registering purposes'''
    fullname: str = Field(default=...)
    phone_number: str = Field(default=...)
    email: EmailStr = Field(default=...)
    password: str = Field(default=...)


class UserInDB(User):
    '''User in database'''
    password_hash: str = Field(default=...)


class Token(BaseModel):
    access_token: str
    token_type: str



class AdvertDetailed(Advert, LocationDetails, User):
    '''Advert model with additional information about the author and location'''
    pass