from pydantic import BaseModel, EmailStr, Field
import datetime
from typing import Optional, List


class LocationDetails(BaseModel):
    travel_time: float = Field(default=...) # travel time in seconds

class Advert(BaseModel):
    advert_id: Optional[int] = Field(default=None)
    latitude: float = Field(default=...)
    longitude: float = Field(default=...)
    date: datetime.date = Field(default=None)
    price: float = Field(default=...)
    author_id: int = Field(default=None)
    description: str = Field(default=...)
    title: str = Field(default=...)
    images: List[str] = Field(default=...)
    address: str = Field(default=...)
    score: float = Field(default=None)


class User(BaseModel):
    user_id: int = Field(default=None)
    email: str = Field(default=...)
    fullname: str = Field(default=...)
    phone_number: str = Field(default=...)


class UserRegister(BaseModel):
    '''User model for register purposes'''
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

