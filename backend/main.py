from fastapi import FastAPI
import app.user as user
import app.advert as advert


app = FastAPI()

app.include_router(user.router)
app.include_router(advert.router)

