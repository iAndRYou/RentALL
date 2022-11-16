from fastapi import APIRouter, Path, Body, Query
from .models import LocationDetails

router = APIRouter()

@router.get('/location_details/{advert_id}', response_model=LocationDetails, tags=['location details'])
async def get_location_details(advert_id: int = Path(), destination_latitude: float = Query(alias="latitude"), destination_longitude: float = Query(alias="longitude")):
    pass

@router.post('/score/{advert_id}', response_model=int, tags=['location details'])
async def fetch_advert_score(advert_id: int = Path(), location_details: LocationDetails = Body()):
    pass