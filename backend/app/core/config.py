# app/core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI App"
    API_V1_STR: str = "/api/v1"
    
    # Points to your Dockerized MongoDB instance
    MONGODB_URL: str = "mongodb://localhost:27017"
    DATABASE_NAME: str = "app_db"

    class Config:
        case_sensitive = True

settings = Settings()