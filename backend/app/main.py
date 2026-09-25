# app/main.py
from contextlib import asynccontextmanager
from fastapi import FastAPI
from app.core.config import settings
from app.db.mongodb import connect_to_mongo, close_mongo_connection, get_database

@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_to_mongo()
    yield
    await close_mongo_connection()

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan
)

@app.get("/")
async def root():
    db = get_database()
    # Insert a dummy record into a collection called "test_collection"
    result = await db["test_collection"].insert_one({"status": "active", "source": "FastAPI"})
    return {
        "message": "Connected!",
        "inserted_id": str(result.inserted_id)
    }