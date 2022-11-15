from fastapi import APIRouter, Path, Body
from models import Location, LocationDetails

router = APIRouter()

@router.post('/location_details/{advert_id}', response_model=LocationDetails)
async def fetch_location_details(advert_id: int = Path(), destination: Location = Body()):
    pass

@router.post('/score/{advert_id}', response_model=int)
async def fetch_advert_score(advert_id: int = Path(), location_details: LocationDetails = Body()):
    pass