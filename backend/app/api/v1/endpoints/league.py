# app/api/v1/endpoints/league.py
from fastapi import APIRouter, Depends
from app.api.deps import get_db

router = APIRouter()

@router.post("/")
async def create_league(payload: dict, db = Depends(get_db)):
    result = await db["leagues"].insert_one(payload)
    return {"id": str(result.inserted_id), "status": "created"}

@router.get("/")
async def list_leagues(db = Depends(get_db)):
    leagues = await db["leagues"].find().to_list(100)
    # Convert ObjectId to string for JSON serialization
    for league in leagues:
        league["_id"] = str(league["_id"])
    return leagues