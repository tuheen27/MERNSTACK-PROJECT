# 🏢 MERN Employee Dashboard

A modern, full-stack employee management system built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring attendance tracking, Docker containerization, and a responsive user interface.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-19.2-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Features

### 👥 Employee Management
- ✅ **Add/Edit/Remove** employees with comprehensive profiles
- ✅ **Search & Filter** across all employee fields
- ✅ **Unique validation** for email and employee ID
- ✅ **Soft delete** functionality to maintain data integrity
- ✅ **Department categorization** (IT, HR, Finance, Marketing, Sales, Operations)

### 📅 Attendance Tracking
- ✅ **Daily check-in/check-out** system with timestamp recording
- ✅ **Automatic working hours** calculation
- ✅ **Real-time attendance** status monitoring
- ✅ **Historical attendance** viewing with date filtering
- ✅ **Attendance dashboard** with daily statistics
- ✅ **Status management** (Present, Absent, Late, Half-day)

### 🎨 Modern UI/UX
- ✅ **Responsive design** optimized for all screen sizes
- ✅ **Modal-based forms** for seamless user interactions
- ✅ **Color-coded status indicators** for quick visual feedback
- ✅ **Interactive dashboard** with real-time statistics
- ✅ **Loading states** and comprehensive error handling

### 🐳 DevOps Ready
- ✅ **Complete Docker containerization** for all services
- ✅ **Production-ready multi-stage builds**
- ✅ **Database initialization** with sample data
- ✅ **Health monitoring** and graceful shutdowns
- ✅ **Environment-based configuration**

## 🛠️ Technology Stack

### Backend
- **Node.js** 18+ - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** 7.0 - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **bcryptjs** & **jsonwebtoken** - Security (ready for auth)

### Frontend
- **React** 19.2 - UI library
- **React Router** v7 - Client-side routing
- **Axios** - HTTP client
- **Modern CSS** - Custom responsive styling

### DevOps & Deployment
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Static file serving and reverse proxy
- **MongoDB Express** - Database administration UI

## 📋 Prerequisites

Before running this application, ensure you have:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)

## 🚀 How to Run the Application

There are two ways to run this application: **with Docker** (recommended) or **without Docker** (manual setup). Choose the method that works best for your environment.

---

## 🐳 Method 1: Running with Docker (Recommended)

This method is **easier and faster** as Docker handles all the dependencies and environment setup automatically.

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running
- [Git](https://git-scm.com/) for cloning the repository

### Step-by-Step Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/tuheen27/MERNSTACK-PROJECT.git
cd MERN-APPLICATION
```

#### 2. Start All Services with Docker Compose
```bash
# Build and start all services (MongoDB, Backend, Frontend, Mongo Express)
docker-compose up -d

# Wait for all containers to be healthy (about 30-60 seconds)
```

#### 3. Verify All Services are Running
```bash
# Check container status
docker-compose ps

# You should see all containers running and healthy
```

#### 4. Access the Application
- **Frontend Application**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health
- **Database Admin Panel**: http://localhost:8081

### Docker Management Commands
```bash
# View logs for all services
docker-compose logs

# View logs for specific service
docker-compose logs frontend
docker-compose logs backend
docker-compose logs mongodb

# Stop all services
docker-compose down

# Stop and remove all data (fresh start)
docker-compose down -v

# Restart all services
docker-compose restart

# Rebuild containers (after code changes)
docker-compose build --no-cache
docker-compose up -d
```

---

## 💻 Method 2: Running without Docker (Manual Setup)

This method requires you to install and configure each component manually.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) installed locally
- [Git](https://git-scm.com/) for cloning the repository

### Step-by-Step Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/tuheen27/MERNSTACK-PROJECT.git
cd MERN-APPLICATION
```

#### 2. Install MongoDB and Start Service

**On Windows:**
```bash
# Download and install MongoDB Community Server
# Start MongoDB service
net start MongoDB

# Or start manually
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
```

**On macOS:**
```bash
# Install MongoDB using Homebrew
brew install mongodb-community@7.0

# Start MongoDB service
brew services start mongodb-community@7.0
```

**On Ubuntu/Linux:**
```bash
# Install MongoDB
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB service
sudo systemctl start mongod
sudo systemctl enable mongod
```

#### 3. Set Up Database with Sample Data
```bash
# Connect to MongoDB and create database
mongosh

# In MongoDB shell, run:
use employee_dashboard

# Insert sample employees (copy from mongo-init.js or create manually)
# Exit MongoDB shell
exit
```

#### 4. Install Application Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Return to root directory
cd ..
```

#### 5. Configure Environment Variables

Create `backend/.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/employee_dashboard
PORT=5000
NODE_ENV=development
```

#### 6. Start the Application

**Option A: Start Both Services Concurrently**
```bash
# From root directory
npm run dev
```

**Option B: Start Services Separately**

Terminal 1 (Backend):
```bash
cd backend
npm run dev
# Backend will start on http://localhost:5000
```

Terminal 2 (Frontend):
```bash
cd frontend
npm start
# Frontend will start on http://localhost:3000
```

#### 7. Access the Application
- **Frontend Application**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

### Manual Setup Management Commands
```bash
# Start both services concurrently
npm run dev

# Start only backend
npm run server

# Start only frontend
npm run client

# Install all dependencies at once
npm run install-all

# Check if services are running
# Backend: curl http://localhost:5000/health
# Frontend: Open browser to http://localhost:3000
```

---

## 🔧 Troubleshooting

### Docker Issues
```bash
# If containers fail to start
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# If ports are in use
docker-compose down
# Change ports in docker-compose.yml if needed

# View detailed logs
docker-compose logs -f [service-name]
```

### Manual Setup Issues
```bash
# If MongoDB connection fails
# Check if MongoDB is running
sudo systemctl status mongod  # Linux
brew services list | grep mongodb  # macOS

# If ports are already in use
# Kill processes on specific ports
npx kill-port 3000  # Frontend
npx kill-port 5000  # Backend

# If npm install fails
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 🎯 Quick Start Summary

### For Docker Users (Recommended):
```bash
git clone https://github.com/tuheen27/MERNSTACK-PROJECT.git
cd MERN-APPLICATION
docker-compose up -d
# Access: http://localhost:3000
```

### For Manual Setup Users:
```bash
git clone https://github.com/tuheen27/MERNSTACK-PROJECT.git
cd MERN-APPLICATION
npm run install-all
# Ensure MongoDB is running locally
npm run dev
# Access: http://localhost:3000
```

## 🌐 Application Access

Once running, access the application at:

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend** | http://localhost:3000 | Main application interface |
| **Backend API** | http://localhost:5000 | REST API endpoints |
| **Health Check** | http://localhost:5000/health | API health status |
| **Database Admin** | http://localhost:8081 | MongoDB Express UI |

### Default Database Credentials
- **Username**: `admin`
- **Password**: `password123`

## 📊 Sample Data

The application comes with pre-populated sample data:

- **4 Sample Employees** across different departments
- **Database indexes** for optimal performance
- **Department categories** for easy organization

## 🎯 Usage Guide

### Dashboard
- View **daily attendance statistics** (total, present, absent, attendance rate)
- Monitor **real-time attendance records** with timestamps
- Track **working hours** for each employee

### Employee Management
1. **Add Employee**: Click "Add Employee" and fill in the required information
2. **Edit Employee**: Click "Edit" next to any employee to modify their details
3. **Remove Employee**: Click "Remove" to soft-delete (status changes to inactive)
4. **Search**: Use the search bar to find employees by name, email, ID, or department

### Attendance Tracking
1. **Quick Check-in**: Use the dashboard for rapid check-in/check-out
2. **Attendance Records**: View historical attendance with filtering options
3. **Status Updates**: Monitor working hours and attendance status
4. **Date Filtering**: Filter attendance by specific dates or employees

## 📁 Project Structure

```
MERN-APPLICATION/
├── 📁 backend/                 # Node.js/Express API
│   ├── 📁 models/             # MongoDB schemas
│   │   ├── Employee.js        # Employee data model
│   │   └── Attendance.js      # Attendance data model
│   ├── 📁 routes/             # API endpoints
│   │   ├── employees.js       # Employee CRUD operations
│   │   └── attendance.js      # Attendance management
│   ├── server.js              # Main server file
│   ├── Dockerfile             # Backend containerization
│   └── healthcheck.js         # Docker health monitoring
├── 📁 frontend/               # React application
│   ├── 📁 src/
│   │   ├── 📁 components/     # Reusable components
│   │   │   ├── Navbar.js      # Navigation component
│   │   │   ├── Modal.js       # Modal component
│   │   │   └── EmployeeForm.js # Employee form component
│   │   ├── 📁 pages/          # Main application pages
│   │   │   ├── Dashboard.js   # Main dashboard
│   │   │   ├── Employees.js   # Employee management
│   │   │   └── Attendance.js  # Attendance tracking
│   │   ├── App.js             # Main app component
│   │   └── App.css            # Styling
│   ├── Dockerfile             # Frontend containerization
│   └── nginx.conf             # Nginx configuration
├── docker-compose.yml         # Multi-container setup
├── mongo-init.js              # Database initialization
├── package.json               # Root project configuration
└── README.md                  # Project documentation
```

## 🔧 API Reference

### Employee Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all active employees |
| GET | `/api/employees/:id` | Get specific employee |
| POST | `/api/employees` | Add new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Remove employee (soft delete) |
| GET | `/api/employees/:id/attendance` | Get employee attendance history |

### Attendance Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/attendance` | Get attendance records (with filters) |
| POST | `/api/attendance/checkin` | Mark employee check-in |
| POST | `/api/attendance/checkout` | Mark employee check-out |
| GET | `/api/attendance/today` | Get today's attendance summary |
| PUT | `/api/attendance/:id` | Update attendance record |
| DELETE | `/api/attendance/:id` | Delete attendance record |

### Example API Requests

**Add Employee:**
```bash
curl -X POST http://localhost:5000/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@company.com",
    "position": "Developer",
    "department": "IT",
    "employeeId": "EMP001",
    "phone": "+1-555-0123"
  }'
```

**Check-in Employee:**
```bash
curl -X POST http://localhost:5000/api/attendance/checkin \
  -H "Content-Type: application/json" \
  -d '{"employeeId": "EMPLOYEE_ID_HERE"}'
```

## 🐳 Docker Commands

### Basic Operations
```bash
# Build and start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs [service-name]

# Restart specific service
docker-compose restart [service-name]
```

### Advanced Operations
```bash
# Rebuild containers
docker-compose build --no-cache

# Reset database (removes all data)
docker-compose down -v && docker-compose up -d

# Scale services (if needed)
docker-compose up -d --scale backend=2
```

### Individual Container Commands
```bash
# Build backend only
docker-compose build backend

# Build frontend only
docker-compose build frontend

# View container status
docker-compose ps
```

## 🔧 Environment Configuration

### Backend Environment Variables (.env)
```env
# Database Configuration
MONGODB_URI=mongodb://admin:password123@mongodb:27017/employee_dashboard?authSource=admin

# Server Configuration
PORT=5000
NODE_ENV=production

# Security (for future auth implementation)
JWT_SECRET=your_jwt_secret_here
BCRYPT_ROUNDS=12
```

### Docker Environment
The application uses Docker environment variables for container orchestration:
- Database credentials
- Service networking
- Port mappings
- Health check configurations

## 🚧 Development

### Local Development Setup
```bash
# Install dependencies
npm run install-all

# Start development mode
npm run dev

# Start individual services
npm run server    # Backend only
npm run client    # Frontend only
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both backend and frontend concurrently |
| `npm run server` | Start backend development server |
| `npm run client` | Start frontend development server |
| `npm run install-all` | Install dependencies for all modules |
| `npm run docker:up` | Start Docker containers |
| `npm run docker:down` | Stop Docker containers |
| `npm run docker:logs` | View Docker logs |
| `npm run docker:reset` | Reset and restart containers |

### Code Quality
- **ESLint** configuration for React
- **Consistent code style** across all modules
- **Error handling** at all levels
- **Input validation** on both client and server

## 🔒 Security Features

- **Input validation** and sanitization
- **CORS configuration** for secure cross-origin requests
- **MongoDB injection prevention** through Mongoose
- **Non-root Docker containers** for enhanced security
- **Environment-based secrets** management
- **Security headers** in Nginx configuration

## 📈 Performance Optimizations

### Backend
- **Database indexing** for fast queries
- **Connection pooling** with Mongoose
- **Efficient data pagination** (ready for implementation)
- **Caching strategies** (can be added)

### Frontend
- **Component optimization** with React best practices
- **Efficient state management** with hooks
- **Lazy loading** potential for large datasets
- **Responsive design** for optimal mobile performance

### Infrastructure
- **Multi-stage Docker builds** for smaller images
- **Nginx static file serving** with caching
- **Gzip compression** enabled
- **Health checks** for container monitoring

## 🚀 Deployment

### Production Deployment
This application is production-ready with:

1. **Docker Compose** for easy deployment
2. **Environment configuration** for different stages
3. **Health monitoring** for all services
4. **Graceful shutdowns** and error handling
5. **Security best practices** implemented

### Cloud Deployment Options
- **AWS ECS** with Docker containers
- **Google Cloud Run** for serverless deployment
- **Azure Container Instances** for managed containers
- **DigitalOcean App Platform** for simplified deployment

### CI/CD Integration
Ready for integration with:
- **GitHub Actions** for automated testing and deployment
- **Jenkins** for enterprise CI/CD pipelines
- **GitLab CI** for comprehensive DevOps workflows

## 📝 Future Enhancements

### Planned Features
- [ ] **User Authentication** and role-based access control
- [ ] **Employee photo uploads** with image optimization
- [ ] **Advanced reporting** with charts and analytics
- [ ] **Email notifications** for attendance alerts
- [ ] **Leave management** system
- [ ] **Performance tracking** and reviews
- [ ] **Mobile application** for on-the-go access
- [ ] **Real-time notifications** with WebSocket
- [ ] **Data export** functionality (PDF, Excel)
- [ ] **Multi-language support** for global teams

### Technical Improvements
- [ ] **Redis caching** for improved performance
- [ ] **Elasticsearch** integration for advanced search
- [ ] **Microservices architecture** for better scalability
- [ ] **GraphQL API** as an alternative to REST
- [ ] **Progressive Web App** (PWA) capabilities
- [ ] **Automated testing** suite with Jest/Cypress

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use:**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port
set PORT=3001 && npm start
```

**Docker Connection Issues:**
```bash
# Restart Docker Desktop
# Check Docker daemon status
docker info

# Rebuild containers
docker-compose build --no-cache
```

**Database Connection Failed:**
```bash
# Check MongoDB container
docker-compose logs mongodb

# Restart database
docker-compose restart mongodb
```

**Frontend Build Errors:**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

### Getting Help
- **GitHub Issues**: [Create an issue](https://github.com/tuheen27/MERNSTACK-PROJECT/issues)
- **Documentation**: Check this README and inline code comments
- **Community**: Join discussions in the repository

### Contributing
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

## 👨‍💻 Author

**Tuheen**
- GitHub: [@tuheen27](https://github.com/tuheen27)
- Repository: [MERNSTACK-PROJECT](https://github.com/tuheen27/MERNSTACK-PROJECT)

## 🙏 Acknowledgments

- **MERN Stack Community** for excellent documentation and tutorials
- **Docker** for containerization technology
- **MongoDB** for the flexible NoSQL database
- **React Team** for the amazing frontend framework
- **Express.js** for the fast web framework
- **Node.js** for the powerful JavaScript runtime

---

⭐ **Star this repository** if you found it helpful!

💡 **Feel free to contribute** and make this project even better!

🚀 **Happy coding!**