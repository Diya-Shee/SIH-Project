import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from google import genai


# Load variables from .env
load_dotenv()

# Get Gemini API key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError(
        "GEMINI_API_KEY is missing. Please add it to backend/.env"
    )

# Create Gemini client
client = genai.Client(api_key=GEMINI_API_KEY)


# Create FastAPI application
app = FastAPI(
    title="Vajra AI Backend",
    description="Backend for the Vajra AI assistant",
    version="1.0.0",
)


# Allow React/Vite frontend to communicate with Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Health check
@app.get("/")
def home():
    return {
        "message": "Vajra AI Backend is running successfully!"
    }


# Ask Vajra
@app.post("/api/llm/chat")
def chat(data: dict):

    message = data.get("message", "").strip()

    if not message:
        raise HTTPException(
            status_code=400,
            detail="Message cannot be empty.",
        )

    try:
        response = client.models.generate_content(
            model="gemini-3.7-flash",
            contents=message,
        )

        return {
            "response": response.text
        }

    except Exception as error:
        print("Gemini API Error:", error)

        raise HTTPException(
            status_code=500,
            detail="Unable to get a response from Gemini.",
        )