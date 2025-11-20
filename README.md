# 🏢 Employee Dashboard - MERN Stack Application

Hey there! 👋 Welcome to my Employee Dashboard project. This is a full-featured employee management system that I built to help small businesses track their employees and attendance in a simple, clean way.

## What Does This App Do? 🤔

Think of it as your digital HR assistant! You can:
- **Add new employees** with all their details (name, email, department, etc.)
- **Track daily attendance** - who's in, who's out, and when
- **See everything at a glance** on a beautiful dashboard
- **Search and filter** through your employee data easily

No more messy spreadsheets or paper attendance sheets! 📋✨

## What I Built This With 🛠️

I chose the **MERN stack** because it's powerful, modern, and perfect for this kind of app:

- **MongoDB** - Stores all our data (employees, attendance records)
- **Express.js** - Handles the backend API (the brain of the operation)
- **React** - Creates the beautiful frontend you interact with
- **Node.js** - Powers the backend server

Plus some extras:
- **Docker** - Makes setup super easy (no MongoDB installation headaches!)
- **Mongoose** - Makes working with MongoDB smooth as butter
- **Axios** - Handles API calls between frontend and backend

## Before You Start 📝

You'll need these installed on your computer:
- **Node.js** (version 14+) - [Get it here](https://nodejs.org/)
- **Docker Desktop** - [Download here](https://www.docker.com/products/docker-desktop) (trust me, this makes everything easier!)
- **Git** - [Download here](https://git-scm.com/)

Don't worry if you're new to any of these - I've made the setup as simple as possible!

## Getting Started (The Easy Way!) 🚀

### Option 1: Docker Setup (I Recommend This!)

This is the easiest way to get everything running. Docker handles all the MongoDB setup for you.

```bash
# 1. Get the code
git clone https://github.com/tuheen27/MERNSTACK-PROJECT.git
cd MERN-APPLICATION

# 2. Install everything
npm run install-all

# 3. Start the magic! ✨
docker-compose up -d
npm run dev
```

That's it! 🎉 Your app will be running at:
- **Frontend (the app you'll use)**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Database Admin Panel**: http://localhost:8081 (username: admin, password: adminpass)

### Option 2: Manual Setup (If You Prefer More Control)

```bash
# 1. Clone the repository
git clone https://github.com/tuheen27/MERNSTACK-PROJECT.git
cd MERN-APPLICATION

# 2. Install all dependencies
npm run install-all

# 3. Start MongoDB with Docker
docker-compose up -d

# 4. Start the application
npm run dev
```

## How to Use the App 🎯

Once everything is running, here's how you can use it:

### The Dashboard 📊
- Open http://localhost:3000 in your browser
- You'll see today's attendance overview
- Check how many people are present/absent
- View the attendance rate at a glance

### Managing Employees 👥
1. **Adding Someone New**: Click "Add Employee" and fill out the form
2. **Editing Details**: Click "Edit" next to any employee to update their info
3. **Removing Someone**: Click "Remove" (don't worry, it's just a soft delete!)
4. **Finding People**: Use the search bar to quickly find anyone

### Tracking Attendance ✅
1. **Check-In**: Click the check-in button for each employee when they arrive
2. **Check-Out**: Mark check-out when they leave (it calculates working hours automatically!)
3. **View History**: Filter by date to see past attendance records
4. **Check Status**: See who's present, late, or absent

## What's Inside? 📂

Here's how I organized everything:

```
MERN-APPLICATION/
├── backend/                 # The server-side magic ⚡
│   ├── models/             # Database schemas (how data is structured)
│   ├── routes/             # API endpoints (how frontend talks to backend)
│   ├── server.js           # Main server file
│   └── .env                # Secret configuration
├── frontend/               # The pretty interface you see 🎨
│   ├── src/
│   │   ├── components/     # Reusable UI pieces
│   │   ├── pages/          # Main app screens
│   │   └── App.js          # Main React component
│   └── package.json
├── docker-compose.yml      # MongoDB setup made easy
└── README.md              # You're reading this! 📖
```

## API Reference (For Developers) 🔌

If you want to build something that talks to this app, here are the endpoints:

### Employee Endpoints
- `GET /api/employees` - Get all employees
- `POST /api/employees` - Add a new employee
- `PUT /api/employees/:id` - Update employee info
- `DELETE /api/employees/:id` - Remove an employee

### Attendance Endpoints
- `POST /api/attendance/checkin` - Mark someone as checked in
- `POST /api/attendance/checkout` - Mark checkout
- `GET /api/attendance/today` - Get today's attendance summary

## Environment Setup 🔧

The app needs a few configuration settings. In the `backend` folder, there's a `.env` file:

```env
# This tells the app where to find the database
MONGODB_URI=mongodb://admin:password123@localhost:27017/employee_dashboard?authSource=admin

# Which port to run the server on
PORT=5000
```

## Common Problems & Solutions 🚨

**"Can't connect to MongoDB"**
- Make sure Docker is running: `docker-compose up -d`
- Check if the containers are up: `docker ps`

**"Port 3000 is already in use"**
- Something else is using that port. Try: `set PORT=3001 && npm start`

**"Module not found" errors**
- Run `npm install` in the root folder, then in backend and frontend folders

**App is slow or not updating**
- Restart everything: Stop the servers (Ctrl+C) and run `npm run dev` again

## Useful Commands 📝

```bash
# Start everything
npm run dev

# Start just the backend
npm run server

# Start just the frontend  
npm run client

# Install everything at once
npm run install-all

# Docker commands
docker-compose up -d      # Start database
docker-compose down       # Stop database
docker-compose logs       # See what's happening
```

## What I Learned Building This 🎓

This project taught me a lot about:
- Building RESTful APIs with Express
- React hooks and state management
- MongoDB database design
- Docker containerization
- Full-stack application architecture

It's been a great learning experience, and I hope it helps you too!

## Want to Contribute? 🤝

Found a bug? Have an idea for a cool feature? I'd love your help!

1. Fork this repository
2. Create a new branch: `git checkout -b my-cool-feature`
3. Make your changes
4. Commit them: `git commit -m 'Add my cool feature'`
5. Push: `git push origin my-cool-feature`
6. Create a Pull Request

## Future Ideas 💡

Things I'd love to add someday:
- [ ] Email notifications for attendance
- [ ] Employee photo uploads
- [ ] Leave management system
- [ ] Mobile app version
- [ ] Advanced reporting and charts
- [ ] User authentication (login/logout)
- [ ] Role-based permissions

## Thank You! ❤️

Thanks for checking out my project! If you found it helpful or interesting, I'd appreciate a star ⭐ on GitHub.

Questions? Feel free to open an issue or reach out!

---

**Built with lots of ☕ and the MERN Stack**

*Happy coding! 🚀*