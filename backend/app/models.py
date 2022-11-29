from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List


class LocationDetails(BaseModel):
    travel_time: float = Field(default=...) # travel time in seconds

class Advert(BaseModel):
    advert_id: int = Field(default=...)
    latitude: float = Field(default=...)
    longitude: float = Field(default=...)
    date: str = Field(default=...)
    price: int = Field(default=...)
    author_id: int = Field(default=...)
    description: Optional[str] = Field(default=...)
    title: str = Field(default=...)
    images: str = Field(default=...)


class User(BaseModel):
    user_id: int = Field(default=...)
    email: str = Field(default=...)
    fullname: str = Field(default=...)
    phone_number: str = Field(default=...)


class UserRegister(BaseModel):
    fullname: str = Field(default=...)
    phone_number: str = Field(default=...)
    email: EmailStr = Field(default=...)
    password: str = Field(default=...)

class UserInDB(User):
    password_hash: str = Field(default=...)


class Token(BaseModel):
    access_token: str
    token_type: str

