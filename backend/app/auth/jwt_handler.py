from jose import JWTError, jwt
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from models import User, UserInDB
from datetime import datetime, timedelta
from db.user_interface import DBGetUser


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')


SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


def decode_token(token: str) -> User:
    '''
    Decode a token and return the user
    '''

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise JWTError
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    user = DBGetUser.get_user_by_email(email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def create_access_token(data: dict):
    '''
    Create an access token with an expiry time
    '''
    
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def authenticate_user(email: str, password: str) -> UserInDB:
    '''
    Authenticate user by email and password
    '''
    
    user = DBGetUser.get_user_by_email(email)
    if not user: # no user was found with that email
        return False
    if not verify_password(password, user.password_hash): # password hashes don't match
        return False
    return user


def get_password_hash(password):
    '''
    Hash a password for storing
    '''
    
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password):
    '''
    Verify a stored password against one provided by user
    '''
    
    return pwd_context.verify(plain_password, hashed_password)


