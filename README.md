# 🚀 AI Startup Idea Validator

An AI-powered web application that analyzes startup ideas and generates structured validation reports using LLMs.

---

## 🌐 Live Demo

* **Frontend:** https://ai-powered-startup-idea-validator.vercel.app
* **Backend API:** https://ai-poweredstartupideavalidator.onrender.com

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

* MongoDB Atlas

### AI Integration

* Google Gemini API

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Kunal13Kashyap/AI_poweredStartupIdeaValidator.git
cd AI_poweredStartupIdeaValidator
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

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_url
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

* `POST /ideas` → Submit idea & generate AI report
* `GET /ideas` → Fetch all ideas
* `GET /ideas/:id` → Get detailed report
* `DELETE /ideas/:id` → Delete idea (optional)

---

## 🏗️ Architecture Notes

* Backend follows MVC architecture
* AI response is parsed and stored in MongoDB
* REST APIs connect frontend and backend
* Clean separation of concerns across layers

---

## ✨ Author

**Kunal Kashyap**
