# 📚 Book Review Platform

A full-stack web application where users can sign up, log in, add books, write reviews, and rate books from 1 to 5 stars. Built using **React**, **Node.js**, and **MongoDB**.

---

## ✅ Features

### 🔐 Authentication
- User Signup/Login using **JWT**
- Only logged-in users can add books or reviews

### 📘 Books
- Add new books with `title`, `author`, and `genre`
- View a paginated list of books
- Filter books by **genre** and/or **author**
- See the **average rating** per book on list and detail pages

### ✍️ Reviews
- Add reviews to any book
- Include rating (1 to 5 stars) and text
- View all reviews for a selected book

---

## 🛠 Tech Stack

### 🔧 Backend
- Node.js |
- Express.js |
- MongoDB + Mongoose |
- JWT Authentication |
- RESTful API

### 💻 Frontend
- React (with Hooks) |
- Axios |
- React Router DOM

---

## 🚀 Getting Started

### 🖥 Clone the Repository

git clone https://github.com/mayank-kaneriya/book-review-app.git |
cd book-review-app


Backend Setup--->
cd backend |
npm install

Create a .env file inside /backend:
MONGO_URI=your_mongodb_uri | 
JWT_SECRET=your_jwt_secret |
PORT=5000

Frontend Setup--->
cd frontend
npm install |
npm start


User Flow : 
1.Sign up or log in |
2.View all books (with filters) |
3.Add a new book |
4.Click on a book to view its reviews |
5.Submit your own review and rating
