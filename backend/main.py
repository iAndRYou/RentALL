from fastapi import FastAPI
import psycopg2

from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel, Field
from typing import List, Optional
import app.user as user
import app.advert as advert
import app.location_details as location_details

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_origin_regex='http://localhost:\d{4}$',
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router)
app.include_router(advert.router)
app.include_router(location_details.router)
