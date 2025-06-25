# 🖼️ Text-Imagify – Full Stack AI Image Generator SaaS App

Text-Imagify is a Full Stack AI SaaS Application built using MongoDB, Express, React, and Node.js (MERN Stack). It allows users to generate images from text prompts using the ClipDrop AI API.

The app includes user authentication, a credit-based system for controlling AI usage, and payment gateway integration so users can purchase more credits. A sleek and modern UI ensures a great user experience.

---

## 🚀 Features

- 🔐 Secure user authentication (JWT-based)
- ✍️ AI-based text-to-image generation using ClipDrop API
- 💳 Credit system to control generation limits
- 💰 Payment gateway integration to purchase more credits
- 🧾 User account, usage & credit history stored in MongoDB
- ⚙️ RESTful backend API using Express.js
- ⚡ Fast and responsive frontend built with React + Tailwind CSS

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- React Router
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + Bcrypt (for authentication)
- ClipDrop API (for image generation)
- Stripe (or Razorpay) for payment integration

---

# 📁 Folder Structure
Text-Imagify/
├── backend/                     # Node.js + Express REST API
│   ├── controllers/
│   ├── database
│   ├── models/
│   ├── routes/
│   ├── .env                     # Environment variables
│   └── server.js
│
├── frontend/    #                # React.js frontend (Vite + Tailwind)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── .env                     # Frontend env file
│   └── vite.config.js
│
├── .gitignore                   # Ignore env, node_modules, build, etc.
├── README.md                    # Project documentation
└── package.json      


---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rajrohan10899/Text-Imagify.git
cd Text-Imagify


