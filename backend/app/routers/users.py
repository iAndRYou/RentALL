from fastapi import APIRouter, Query, Path, Depends, Body, Form, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from typing import List

from ..models import User, UserRegister, UserInDB, Token
from ..auth.jwt_handler import pwd_context, create_access_token, decode_token, oauth2_scheme, get_password_hash, verify_password, authenticate_user
from ..db.user_interface import DBGetUser, DBEditUser
from ..db.advert_interface import DBGetAdvert, DBEditAdvert


router = APIRouter()


@router.post('/token', response_model=Token, tags=['users'])
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    '''
    Login for access token
    '''

    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    access_token = create_access_token(
        data={"sub": user.email}
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.post('/register', response_model=User, tags=['users'])
async def register_user(new_user: UserRegister = Body()):
    '''
    Register a new user
    '''
    
    dbuser = DBGetUser.get_user_by_email(new_user.email)
    if dbuser:
        raise HTTPException(status_code=400, detail="Email already registered")
    dbuser = UserInDB(fullname=new_user.fullname, email=new_user.email, password_hash=get_password_hash(new_user.password), phone_number=new_user.phone_number)
    DBEditUser.add_user(dbuser)

    user = DBGetUser.get_user_by_email(dbuser.email)

    return user


# get all users
@router.get('/users', response_model=List[User], tags=['users'])
async def get_users():
    '''
    Get all users
    '''
    
    return DBGetUser.get_all_users()


@router.get('/users/me', response_model=User, tags=['users'])
async def get_current_user(current_user: User = Depends(decode_token)):
    '''
    Get current user
    '''
    
    return current_user


@router.get('/users/{user_id}', response_model=User, tags=['users'])
async def get_user(user_id: int = Path()):
    '''
    Get user by user id
    '''

    user = DBGetUser.get_user_by_id(user_id)

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return user


@router.get('/users', response_model=User, tags=['users'])
async def get_user_by_email(email: str = Query(default=...)):
    '''
    Get user by email
    '''
    
    user = DBGetUser.get_user_by_email(email)

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return user


@router.delete("/users/{user_id}", tags=['users'])
async def delete_user(user_id: int, current_user: User = Depends(decode_token)):
    '''
    Delete user from the database
    '''

    user_adverts = DBGetAdvert.get_adverts_by_author_id(current_user)
    for advert in user_adverts:
        DBEditAdvert.delete_advert(advert.advert_id, current_user)

    DBEditUser.delete_user(user_id, current_user)

    return {"message": "User deleted successfully"}
