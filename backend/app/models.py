from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List

class Location(BaseModel):
    latitude: float = Field(default=...)
    longitude: float = Field(default=...)

class LocationDetails(BaseModel):
    travel_time: float = Field(default=...) # travel time in seconds

class Advert(BaseModel):
    advertId: int = Field(default=...)
    latitude: float = Field(default=...)
    longitude: float = Field(default=...)
    date: str = Field(default=...)
    price: int = Field(default=...)
    author_id: int = Field(default=...)
    description: Optional[str] = Field(default=...)
    title: str = Field(default=...)
    images: Optional[List[str]] = Field(default=...)


class User(BaseModel):
    fullname: str = Field(default=...)
    email: EmailStr = Field(default=...)
    phone_number: str = Field(default=...)
    user_id: int = Field(default=...)

class UserInDB(User):
    password_hash: str = Field(default=...)


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None