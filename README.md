# MERN Employee Dashboard

A full-stack employee management system with attendance tracking built using MongoDB, Express.js, React, and Node.js.

## 🚀 Features

- **Employee Management**: Add, remove, and view employees with detailed information
- **Attendance Tracking**: Mark check-in/check-out and view attendance history
- **Dashboard Interface**: Clean and responsive UI with real-time statistics
- **Search & Filter**: Find employees and filter attendance records easily
- **Real-time Updates**: Dynamic updates without page refresh

## 🛠 Tech Stack

- **Frontend**: React.js 19+ with React Router for navigation
- **Backend**: Node.js with Express.js REST API
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Modern CSS3 with responsive design
- **Development**: Nodemon for backend, React Scripts for frontend

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **Docker Desktop** (recommended for MongoDB) - [Download here](https://www.docker.com/products/docker-desktop)
- **Git** - [Download here](https://git-scm.com/)

### Database Options:
1. **MongoDB with Docker** (Recommended) - See [Docker MongoDB Guide](./DOCKER_MONGODB_GUIDE.md)
2. **MongoDB Local Installation** - See [MongoDB Setup Guide](./MONGODB_SETUP.md)

## 🚀 Quick Start

### Option A: Using Docker (Recommended)

#### 1. Clone and Install
```bash
git clone <your-repo-url>
cd MERN-APPLICATION
npm run install-all
```

#### 2. Start with Docker
```bash
# Automated setup (Windows)
start-with-docker.bat

# Or manually
docker-compose up -d
npm run dev
```

This will:
- Start MongoDB container with sample data
- Start Mongo Express (database admin UI)
- Start both backend and frontend servers

**Access Points:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000  
- Database Admin: http://localhost:8081

### Option B: Manual Setup

#### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd MERN-APPLICATION
```

#### 2. Install Dependencies
```bash
npm run install-all
```

#### 3. Setup Database
Choose one option:
- **Docker**: See [Docker MongoDB Guide](./DOCKER_MONGODB_GUIDE.md)
- **Local MongoDB**: See [MongoDB Setup Guide](./MONGODB_SETUP.md)

#### 4. Configure Environment
```bash
cd backend
# Edit .env file with your MongoDB connection string
```

#### 5. Start Application
```bash
npm run dev
```

## 🎯 Usage Guide

### Dashboard
- View today's attendance overview
- See total employees, present/absent counts
- Check attendance rate percentage
- View recent attendance records

### Employee Management
- **Add Employee**: Click "Add Employee" button, fill the form
- **Edit Employee**: Click "Edit" button next to employee
- **Remove Employee**: Click "Remove" button (soft delete)
- **Search**: Use search bar to find employees by name, ID, email, etc.

### Attendance Management
- **Quick Check-in/out**: Use the quick action cards for each employee
- **View Records**: Filter by date and employee to view attendance history
- **Check Status**: See working hours, check-in/out times, and status

## 📚 API Endpoints

### Employees
- `GET /api/employees` - Get all active employees
- `POST /api/employees` - Add new employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Remove employee (soft delete)
- `GET /api/employees/:id/attendance` - Get employee attendance history

### Attendance
- `GET /api/attendance` - Get attendance records (with filters)
- `POST /api/attendance/checkin` - Mark employee check-in
- `POST /api/attendance/checkout` - Mark employee check-out
- `GET /api/attendance/today` - Get today's attendance summary
- `PUT /api/attendance/:id` - Update attendance record
- `DELETE /api/attendance/:id` - Delete attendance record

## 🗂 Project Structure

```
MERN-APPLICATION/
├── backend/                 # Node.js/Express API
│   ├── models/             # MongoDB schemas
│   │   ├── Employee.js     # Employee model
│   │   └── Attendance.js   # Attendance model
│   ├── routes/             # API routes
│   │   ├── employees.js    # Employee routes
│   │   └── attendance.js   # Attendance routes
│   ├── .env                # Environment variables
│   ├── server.js           # Entry point
│   └── package.json        # Backend dependencies
├── frontend/               # React application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.js   # Navigation component
│   │   │   ├── Modal.js    # Modal component
│   │   │   └── EmployeeForm.js # Employee form
│   │   ├── pages/          # Page components
│   │   │   ├── Dashboard.js    # Dashboard page
│   │   │   ├── Employees.js    # Employee management
│   │   │   └── Attendance.js   # Attendance page
│   │   ├── config/         # Configuration
│   │   │   └── api.js      # API configuration
│   │   ├── App.js          # Main app component
│   │   └── App.css         # Global styles
│   └── package.json        # Frontend dependencies
├── package.json            # Root package.json for scripts
├── README.md               # This file
├── MONGODB_SETUP.md        # MongoDB setup guide
└── start.bat              # Windows startup script
```

## 🎨 Features in Detail

### Employee Management
- Complete CRUD operations for employee records
- Form validation and error handling
- Unique employee ID and email validation
- Department categorization
- Search and filter functionality

### Attendance System
- Daily check-in/check-out functionality
- Automatic working hours calculation
- Attendance status tracking (present, absent, late, half-day)
- Historical attendance records
- Filtering by date and employee

### Dashboard Analytics
- Real-time attendance statistics
- Attendance rate calculation
- Today's overview with visual stats cards
- Recent attendance records display

## 🔧 Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/employee_dashboard

# Server
PORT=5000
NODE_ENV=development
```

## 🚨 Common Issues & Solutions

### "MongoDB connection error"
- Ensure MongoDB is installed and running
- Check if port 27017 is available
- Verify MONGODB_URI in .env file

### "Something is already running on port 3000"
- Change frontend port: `set PORT=3001 && npm start`
- Or stop the process using port 3000

### "Cannot find module" errors
- Run `npm install` in root, backend, and frontend directories
- Delete node_modules and package-lock.json, then reinstall

## 🛠 Development

### Adding New Features
1. Backend: Add routes in `/backend/routes/`
2. Frontend: Create components in `/frontend/src/components/`
3. Update API configuration in `/frontend/src/config/api.js`

### Database Schema
- **Employee**: name, email, position, department, employeeId, phone, joinDate, status
- **Attendance**: employee (ref), date, checkIn, checkOut, status, notes, workingHours

## 📝 Scripts

```bash
# Development
npm run dev              # Start both frontend and backend
npm run server           # Start backend only  
npm run client           # Start frontend only
npm run install-all      # Install all dependencies

# Docker MongoDB
npm run docker:up        # Start MongoDB containers
npm run docker:down      # Stop MongoDB containers  
npm run docker:logs      # View MongoDB logs
npm run docker:reset     # Reset database (deletes all data)
npm run start:docker     # Start MongoDB + application

# Backend only
cd backend
npm start               # Production server
npm run dev             # Development server

# Frontend only
cd frontend  
npm start               # Development server
npm run build           # Production build
npm test                # Run tests
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Future Enhancements

- [ ] User authentication and authorization
- [ ] Employee photo uploads
- [ ] Attendance reports and exports
- [ ] Email notifications for attendance
- [ ] Mobile app version
- [ ] Advanced analytics and charts
- [ ] Leave management system
- [ ] Role-based permissions

---

**Developed with ❤️ using the MERN Stack**

For support, email [your-email@example.com] or create an issue on GitHub.



# Stop Docker containers
docker-compose down

# Stop Node servers (Ctrl+C in their terminals)


# Start MongoDB
docker-compose up -d

# Start backend (in backend directory)
npm start

# Start frontend (in frontend directory) 
npm start