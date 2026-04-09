# 🚀 AI Startup Idea Validator

An AI-powered full-stack web application that analyzes startup ideas and generates structured validation reports using LLMs.
Built as a complete MVP to simulate real-world product validation workflows.

---

## 🌐 Live Demo

* 🔗 Frontend: https://ai-powered-startup-idea-validator.vercel.app
* 🔗 Backend API: https://ai-poweredstartupideavalidator.onrender.com

---

## 🧠 Features

* Submit startup ideas (title + description)
* AI-generated validation report including:

  * Problem summary
  * Customer persona
  * Market overview
  * Competitor analysis
  * Suggested tech stack
  * Risk level (Low / Medium / High)
  * Profitability score (0–100)
* Dashboard to view all submitted ideas
* Detailed report page with structured insights
* Loading & error handling for smooth UX
* Input validation for required fields

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### AI Integration

* Google Gemini API

---

## 📸 Screenshots

### 🏠 Home Page
![Home](./screenshots/home.png)

### 📊 Dashboard
![Dashboard](./screenshots/dashboard.png)

### 📄 Idea Detail
![Detail](./screenshots/detail.png)

---

## 🏗️ Architecture

[ React Frontend ]
         │
         ▼
[ Express Backend API ]
     │            │
     ▼            ▼
[ Gemini API ]   [ MongoDB ]

---

## ⚙️ Installation & Setup

### 1. Clone the repository

* git clone https://github.com/Kunal13Kashyap/AI_poweredStartupIdeaValidator.git
* cd AI_poweredStartupIdeaValidator

---

### 2. Setup Backend

cd server
npm install

Create a `.env` file inside `/server`:

PORT=5000
MONGO_URI=your_mongodb_uri
GEMINI_API_KEY=your_api_key

Run backend:
npm run dev

---

### 3. Setup Frontend

cd client
npm install
npm run dev

---

## 🔐 Environment Variables

Create a `.env` file in `/server` using:

PORT=5000
MONGO_URI=
GEMINI_API_KEY=

---

## 🤖 AI Prompt Used

You are an expert startup consultant. Analyze the given startup idea and return a structured JSON object with the fields:

* problem
* customer
* market
* competitor
* tech_stack
* risk_level
* profitability_score
* justification

Rules:

* Keep answers concise and realistic
* competitor should contain exactly 3 competitors
* tech_stack should be 4–6 practical technologies
* profitability_score must be an integer between 0–100

Return ONLY JSON

---

## 📡 API Endpoints

- **POST /ideas** → Submit idea & generate AI report  
- **GET /ideas** → Fetch all ideas  
- **GET /ideas/:id** → Get detailed report  
- **DELETE /ideas/:id** → Delete idea

---

## 🧩 Example Request

```json
{
  "title": "AI Study Planner",
  "description": "App that creates personalized study plans using AI"
}
```

---

## 🏗️ Project Structure

AI_poweredStartupIdeaValidator/
│
├── client/                     # Frontend (React + Vite)
│   ├── public/
│   │   └── Favicon.png
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── IdeaCard.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ReportSection.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   └── IdeaDetail.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vercel.json
│   └── vite.config.js
│
├── server/                     # Backend (Node.js + Express)
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── ideaController.js
│   │
│   ├── middleware/
│   │   └── asyncHandler.js
│   │
│   ├── models/
│   │   └── Idea.js
│   │
│   ├── routes/
│   │   └── ideaRoutes.js
│   │
│   ├── services/
│   │   └── aiService.js
│   │
│   ├── utils/
│   │   └── errorHandler.js
│   │
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

---

## 🚀 Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* Database hosted on MongoDB Atlas

---

## 📌 Notes

* AI responses are parsed into structured JSON before storing in database
* Backend follows MVC architecture
* Clean separation of concerns (routes, controllers, services)
* Designed for scalability and easy extension

---

## ✨ Author

Kunal Kashyap

---

## 📄 License

This project is built as part of a technical assignment and is intended for educational purposes