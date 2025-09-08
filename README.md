# Backend Integration Task – Weather API

This project was built as part of the **Backend Integration Internship Assessment**.  
It demonstrates **API integration** by connecting to a free weather API (**Open-Meteo**) and storing the fetched data in **MongoDB** using **Node.js** and **Express.js**.

---

## 🚀 Features
- Fetches **real-time weather data** based on city name.
- Stores weather records in **MongoDB database**.
- Provides an **API endpoint** to test via Postman/Thunder Client.
- Built with **Node.js**, **Express.js**, and **Mongoose**.

---

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Provider**: Open-Meteo (Free weather API, no API key required)
- **HTTP Client**: Axios

---

## 📂 Project Structure
backend-integration-task/
│
├── models/
│ └── weatherRecord.js # MongoDB Schema
│
├── routes/
│ └── weather.js # API route to fetch & store weather
│
├── server.js # Main server entry point
│
├── .env # Environment variables (MongoDB URI, Port)
├── package.json
└── README.md


---

## ⚙️ Setup Instructions

### 1. **Clone the Repository**
```bash
git clone https://github.com/Qalandar-Bux1/weather-api-integration.gi
cd backend-integration-task
2. Install Dependencies
bash
Copy code
npm install
3. Setup .env File
Create a .env file in the root folder and add:


MONGO_URI=mongodb://127.0.0.1:27017/weatherDB
PORT=5000
Note:
Make sure MongoDB is installed and running on your system.

4. Start the Server
npm run dev
If successful, you should see:


Server running on port 5000
✅ MongoDB Connected Successfully

🌐 How to Test the API
Endpoint
POST /api/weather

Request Body (JSON)

{
  "city": "Karachi"
}
Response Example

{
  "message": "Weather data fetched and saved successfully",
  "data": {
    "city": "Karachi",
    "temperature": 30.5,
    "condition": "Clear sky",
    "date": "2025-09-08T14:30:00.000Z"
  }
}
🔄 Data Flow Explanation
Input:

User sends a city name via POST /api/weather.

Process:

The backend:

Uses Open-Meteo API to get current weather data.

Structures the data into a MongoDB-friendly format.

Saves the weather record to the database.

Output:

Returns a JSON response with the fetched weather details and confirmation that it was stored.

❗ Challenges & Solutions
Challenge	Solution
Finding a free weather API	Used Open-Meteo, which requires no API key.
MongoDB connection errors	Fixed by ensuring correct URI format: mongodb://127.0.0.1:27017/weatherDB.
Testing the endpoint easily	Used Thunder Client in VS Code and Postman for testing.

📜 Deliverables
GitHub Repository: Contains complete code and instructions.

Postman/Thunder Client Testing: Verified working endpoint.

Documentation: This README explaining setup and workflow.

📌 Summary
This project demonstrates backend skills by:

Integrating with an external public API.

Building and testing a RESTful API using Node.js and Express.

Storing data in MongoDB.

Following clean project structure and documentation practices.

👨‍💻 Author
Qalandar Bux

GitHub: https://github.com/Qalandar-Bux1

Role: Full Stack Web Developer

yaml
Copy code
