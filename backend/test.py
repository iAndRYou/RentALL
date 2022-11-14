from fastapi import FastAPI

app = FastAPI()

@app.get('/adverts/{advert_id}')
async def get_advert(advert_id: int):
    return {'advert_id': advert_id}