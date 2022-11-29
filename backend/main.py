from fastapi import FastAPI
import psycopg2

from pydantic import BaseModel, Field
from typing import List, Optional
import app.user as user
import app.advert as advert
import app.location_details as location_details

app = FastAPI()

app.include_router(user.router)
app.include_router(advert.router)
app.include_router(location_details.router)
