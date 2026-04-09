# 🚀 AI Startup Idea Validator

An AI-powered web application that analyzes startup ideas and generates structured validation reports.

---

## 🌐 Live Demo

Frontend: https://your-frontend-link
Backend API: https://ai-poweredstartupideavalidator.onrender.com

---

## 🧠 Features

* Submit startup ideas (title + description)
* AI-generated validation report including:

  * Problem summary
  * Customer persona
  * Market overview
  * Competitor analysis
  * Suggested tech stack
  * Risk level
  * Profitability score
* Dashboard to view all ideas
* Detailed report view

---

## ⚙️ Tech Stack

### Frontend

* React
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

### AI

* Google Gemini API (or OpenAI if used)

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Setup Backend

```bash
cd server
npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd client
npm install
npm start
```

---

## 🔐 Environment Variables

Create `.env` file inside `/server`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
GEMINI_API_KEY=your_api_key
```

---

## 🤖 AI Prompt Used

```text
You are an expert startup consultant. Analyze the given startup idea
and return a structured JSON object with the fields: problem,
customer, market, competitor, tech_stack, risk_level,
profitability_score, justification.
Rules:
- Keep answers concise and realistic
- competitor should contain exactly 3 competitors
- tech_stack should be 4–6 technologies
- profitability_score must be between 0–100
Return ONLY JSON
```

---

## 🧩 API Endpoints

* POST /ideas
* GET /ideas
* GET /ideas/:id
* DELETE /ideas/:id (optional)

---

## 🏗️ Architecture Notes

* Backend follows MVC structure
* AI response is parsed and stored in MongoDB
* Frontend uses REST APIs to fetch and display data
* Clean separation of concerns between client and server

---

## ✨ Author

Kunal Kashyap
