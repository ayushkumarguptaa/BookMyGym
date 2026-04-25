🏋️ BookMyGym – Gym Booking Web Application

BookMyGym is a full-stack gym booking web application built using the MERN stack. It allows users to explore gyms, book slots, and manage their fitness schedule efficiently.

🚀 Features

🔐 User Authentication (Login/Register)

🏋️ Browse gyms and services

📅 Slot booking system

📊 User dashboard (bookings & history)

🛠️ Admin panel for gym & booking management

⚡ Fast and responsive UI using React + Vite

🔄 REST API integration

🛠️ Tech Stack

Frontend:

React.js (with Vite)

JavaScript (ES6+)

CSS / Bootstrap

Backend:

Node.js

Express.js

Database:
MongoDB

Other Tools:
REST APIs
Git & GitHub

📁 Project Structure
BookMyGym/
│
├── backend/
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── public/          # Static assets
│   ├── utils/           # Helper functions
│   ├── views/           # EJS templates
│   ├── middlewares.js   # Custom middleware
│   ├── main.js          # Server entry point
│   ├── .env             # Environment variables
│   └── package.json
│
├── frontend/
│   ├── components/      # React components
│   ├── src/             # Main React app
│   ├── public/          # Static files
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/BookMyGym.git
cd BookMyGym
2️⃣ Setup Backend
cd backend
npm install

Create .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Run backend:

npm start
3️⃣ Setup Frontend
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🔗 API Endpoints (Sample)
Method	                 Endpoint	             Description
GET	                      /gyms              	 Get all gyms
POST	                    /book	               Book a gym slot
GET	                      /bookings	           User bookings
POST	                    /login	             User login
POST	                    /register	           User registration

👨‍💻 Author

Ayush Kumar Gupta

GitHub: https://github.com/ayushkumarguptaa
🔮 Future Enhancements
💳 Online payment integration (Razorpay/Stripe)
📩 Email/SMS notifications
⭐ Reviews & ratings system
🔍 Advanced filtering (location, price, timing)
