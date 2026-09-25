# app/core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI App"
    API_V1_STR: str = "/api/v1"  # <--- Add this field
    
    # ... other settings ...

settings = Settings()