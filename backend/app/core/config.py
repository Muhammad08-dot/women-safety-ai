"""
Pydantic v2 Settings for Women Safety AI Platform
"""
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "Women Safety AI Platform"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    
    SECRET_KEY: str = "women_safety_secret_key_44332211"
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:3005", "http://localhost:8005"]
    
    DATABASE_URL: str = "postgresql+asyncpg://safety_user:safety_secret_55@localhost:5437/women_safety_db"
    REDIS_URL: str = "redis://localhost:6384/0"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


settings = Settings()
