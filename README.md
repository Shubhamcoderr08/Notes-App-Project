📝 Notes App API

Secure Notes Management with Authentication & Ownership

A production-style REST API built using Node.js, Express, MongoDB, implementing JWT authentication and strict user data ownership.

This project focuses on real backend engineering concepts used in modern web applications.

🚀 Features
🔐 Authentication & Security

User Registration

User Login

Password hashing with bcrypt

JWT token generation

Authentication middleware

Secure req.user handling

🗂 Notes Management (CRUD)

Create a note

Get logged-in user’s notes

Update own note

Delete own note

🔒 Authorization Rule

A user can only access, update, or delete their own notes
Unauthorized access is strictly blocked.

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT (jsonwebtoken)

bcryptjs

dotenv

📁 Project Structure
API/
├── config/
│   └── db.js
├── controllers/
│   ├── user.js
│   └── notes.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   └── Notes.js
├── routes/
│   ├── user.js
│   └── notes.js
├── server.js
├── package.json
└── .env (ignored)

🔑 Environment Variables

Create a .env file inside the API folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


⚠️ Never push .env to GitHub

🔄 API Flow (Correct Order)
🔹 Step 1: Authentication (Foundation)

User schema

Register API

Login API

Password hashing

JWT token generation

Auth middleware

req.user setup

✅ Required before accessing any protected route

🔹 Step 2: Auth Check

Profile route

Middleware verification

Confirms req.user is working

🔹 Step 3: Notes Schema (Relation)

Notes schema:

title

content

userId (ObjectId reference)

User ↔ Notes relationship established

🔹 Step 4: Notes CRUD (Core Logic)
➕ Create Note

Protected route

Uses req.user._id

Note linked to logged-in user

📄 Get My Notes
find({ userId: req.user._id })

✏️ Update Note

Ownership verification

Only owner can update

🗑 Delete Note

Ownership verification

Only owner can delete

🚫 Authorization Handling

Before updating or deleting:

Check if note exists

Verify ownership

Block unauthorized access

Status Codes Used

200 – Success

401 – Unauthorized

403 – Forbidden

404 – Not Found

▶️ Run Locally
npm install
nodemon server.js


Server runs on:

http://localhost:5000

🧠 Learning Outcomes

Real-world use of req.user

JWT-based authentication flow

Authorization & data ownership

Clean MVC-style backend structure

Secure API design principles


👨‍💻 Author

Shubham Jha
Backend Developer | MERN Stack
Focused on writing clean, secure, and scalable APIs
