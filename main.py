"""
Root Execution Entrypoint for 🚨 Women Safety AI Platform (محفوظ پاکستان)
Runs FastAPI Uvicorn Server
"""
import uvicorn

if __name__ == "__main__":
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8005, reload=True)
