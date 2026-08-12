"""
Women Safety Endpoints (SOS Dispatch & Safe Route Calculation)
"""
from fastapi import APIRouter
from pydantic import BaseModel
from app.services.safety_engine import safety_engine

router = APIRouter()


class SOSRequest(BaseModel):
    latitude: float = 31.5204
    longitude: float = 74.3587
    trigger_type: str = "VOICE_TRIGGER"


@router.post("/sos")
async def trigger_emergency_sos(payload: SOSRequest):
    return safety_engine.trigger_sos(payload.latitude, payload.longitude, payload.trigger_type)


@router.get("/route")
async def get_safe_route(start: str = "Gulberg III", end: str = "DHA Phase 5"):
    return safety_engine.compute_safe_route(start, end)
