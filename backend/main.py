from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import List, Optional
import app.user as user
import app.advert as advert

app = FastAPI()

app.include_router(user.router)
app.include_router(advert.router)




    

