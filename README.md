# 🚢 Cruise Ship Management System

A role-based web application for managing services on a cruise ship — developed using **ReactJS**, **Node.js**, **Express**, and **MongoDB**.

> This project supports Admin, Manager, Head Cook, Supervisor, and Voyager modules with dynamic service ordering, bookings, and real-time data handling.

---

## 🔧 Tech Stack

| Layer        | Technology                     |
|--------------|---------------------------------|
| Frontend     | ReactJS, HTML, CSS, JavaScript, Bootstrap |
| Backend      | Node.js, Express.js            |
| Database     | MongoDB Atlas                  |
| Tooling      | Thunder Client, VS Code, GitHub |

---

## 👥 User Roles & Features

### 🚶 Voyager
- Register & login
- Book services: resort, movie, salon, party, fitness
- Order catering and stationery
- View their bookings (`MyBookings`)
- View their orders (`MyOrders`)

### 🛠️ Admin
- Login as Admin
- Add new catering & stationery items
- View all service orders
- Manage service data from a dashboard

### 📋 Manager
- View all bookings and food/stationery orders by category

### 🍳 Head Cook
- View catering orders and items to prepare

### 🧾 Supervisor
- View stationery order details for monitoring and distribution

---

## 📁 Folder Structure
cruise-ship-management/
├── backend/ # Express.js backend with role-based APIs
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ └── app.js
│
├── frontend/ # ReactJS frontend
│ ├── src/
│ │ ├── pages/ # All UI pages like login, register, dashboard, orders, bookings
│ │ ├── services/ # Axios API setup
│ │ └── App.js
│ └── package.json
│
└── README.md

## 🚀 How to Run Locally

### 1. Cone the repo
git clone https://github.com/<your-username>/cruise-ship-management.git

### 2. Backend Setup
cd backend
npm install
npm run dev
Set up your .env in backend:
MONGO_URI=<your MongoDB URI>
JWT_SECRET=your_jwt_secret
PORT=5000
### 3.Frontend Setup
cd ../frontend
npm install
npm start
Runs at: http://localhost:3000

