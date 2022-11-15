from fastapi import APIRouter, Query, Path, Depends, Body, Form, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import Optional
from passlib.context import CryptContext
from models import User, UserInDB, Token, TokenData


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')

router = APIRouter()





async def db_get_user_id(user_id: int = Path()) -> dict:
    '''
    Fetch user from the database by id
    '''

    # TODO: fetch the actual user from the database
    user = User(fullname="test_name", email="test_email", phone_number="test_phone_number", user_id=user_id)
    return user


def decode_token(token: str) -> User:
    # TODO: actually decode the token
    return User(fullname="test_name", email="test_email", phone_number="test_phone_number", user_id=0)


async def db_get_user_token(token: str = Depends(oauth2_scheme)) -> User:
    '''
    Fetch user from the database by token
    '''

    user = decode_token(token)
    return user


async def db_get_user_email(email: str) -> Optional[User]:
    '''
    Fetch user from the database by email
    '''
    
    # TODO: return the actual user
    return User(fullname="test_name", email=email, phone_number="test_phone_number", user_id=0)


def fake_hash_password(password: str) -> str:
    '''
    (Fake) Hash the password
    '''
    
    return "xxx" + password + "xxx"


def get_password_hash(password):
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def authenticate_user(email: str, password: str):
    user = db_get_user_email(email)
    if not user: # no user was found with that email
        return False
    if not verify_password(password, user.hashed_password): # password hashes don't match
        return False
    return user




# Login for access token
@router.post('/token')
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = db_get_user_email(form_data.username)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    user = UserInDB()
    pass


# Get user {user_id}
@router.get('/users/{user_id}', response_model=User, tags=['users'])
async def get_user(user: User = Depends(db_get_user_id)):
    return user


# Get current user
@router.get('/users/me', response_model=User, tags=['users'])
async def get_current_user(current_user: User = Depends(db_get_user_token)):
    return current_user


# User signup
@router.post('/users/signup', tags=['users'])
async def user_signup():
    pass


# User login
@router.post("/login")
async def login(username: str = Form(), password: str = Form()):
    pass