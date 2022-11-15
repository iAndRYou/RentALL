from pydantic import BaseModel, EmailStr, Field
from typing import Optional

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