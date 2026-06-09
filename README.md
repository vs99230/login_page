## Project Overview

This project is a full-stack Task Management Application built .

The application provides:

* User Registration & Authentication
* JWT-based Authorization
* Protected Routes
* Task CRUD Operations
* MongoDB Database Integration
* React Frontend Dashboard

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt

### Frontend

* React.js
* Vite
* Axios
* React Router DOM
* Tailwind CSS

---

## Project Structure

### Backend

backend/
├── src/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── app.js
├── .env
├── server.js
└── package.json

### Frontend

frontend/
├── src/
│ ├── api/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx
└── package.json

---

## Features

### Authentication

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Token Generation
* Protected API Access

### Task Management

* Create Task
* Get User Tasks
* Update Task
* Delete Task

### Security

* JWT Authentication Middleware
* Protected Routes
* Password Encryption
* User-specific Task Access

---

## API Endpoints

### Authentication

#### Register User

POST /api/v1/auth/register

Request:

{
"name": "Vaibhav",
"email": "[vaibhav@test.com](mailto:vaibhav@test.com)",
"password": "123456"
}

#### Login User

POST /api/v1/auth/login

Request:

{
"email": "[vaibhav@test.com](mailto:vaibhav@test.com)",
"password": "123456"
}

Response:

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc4MDkyMjUzNCwianRpIjoiZmU4Y2YzYWMtOGVmYi00NDRjLWFiNmQtZTc0ODQ2OWIyNzIwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjEiLCJuYmYiOjE3ODA5MjI1MzQsImNzcmYiOiIwMDQ3ZGU1Ny1jMGNhLTRhZDgtYTMyMC1lODQ3MmQ1YmQ2YTUiLCJleHAiOjE3ODA5MjM0MzQsInJvbGUiOiJ1c2VyIn0.sFAXxz5WYqrpbfILB8_ORT0kt62h7JvdbZHXjRa7WZ8"
}

---

### Tasks

#### Create Task

POST /api/v1/tasks

Headers:

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc4MDkyMjUzNCwianRpIjoiZmU4Y2YzYWMtOGVmYi00NDRjLWFiNmQtZTc0ODQ2OWIyNzIwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjEiLCJuYmYiOjE3ODA5MjI1MzQsImNzcmYiOiIwMDQ3ZGU1Ny1jMGNhLTRhZDgtYTMyMC1lODQ3MmQ1YmQ2YTUiLCJleHAiOjE3ODA5MjM0MzQsInJvbGUiOiJ1c2VyIn0.sFAXxz5WYqrpbfILB8_ORT0kt62h7JvdbZHXjRa7WZ8

Body:

{
"title": "Complete Assignment",
"description": "Backend Internship Task"
}

#### Get Tasks

GET /api/v1/tasks

#### Update Task

PUT /api/v1/tasks/:id

#### Delete Task

DELETE /api/v1/tasks/:id

---

## Setup Instructions

### Clone Repository

git clone <repository-url>

### Backend Setup

cd backend

npm install

Create a .env file:

PORT=5000

MONGO_URI=mongodb+srv://vs9959752_db_user:QSRcWnvjbwMG5d04@cluster0.ihxke2n.mongodb.net/taskdb?retryWrites=true&w=majority

JWT_SECRET=your_secret_key

Run Backend:

npm run dev

---

### Frontend Setup

cd frontend

npm install

npm run dev

Frontend URL:

http://localhost:5173

Backend URL:

http://localhost:5000

---

## Application Flow

1. User registers using the registration page.
2. User logs in with valid credentials.
3. Backend generates a JWT token.
4. Token is stored in local storage.
5. Protected requests include the token in Authorization headers.
6. User can perform CRUD operations on tasks.
7. Users can only access their own tasks.

---

## Future Improvements

* Role-Based Access Control (Admin/User)
* Swagger API Documentation
* Redis Caching
* Docker Containerization
* Unit & Integration Testing
* CI/CD Pipeline

---

## Author

Vaibhav Singh

Backend Developer Internship Assignment Submission
