const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection check middleware
app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1 && req.path.startsWith('/api/')) {
    return res.status(503).json({
      message: 'Database connection unavailable',
      error: 'MongoDB is not connected. Please ensure MongoDB is running.',
      setup: 'See MONGODB_SETUP.md for installation instructions'
    });
  }
  next();
});

// MongoDB Connection with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/employee_dashboard');
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('');
    console.log('🔧 MongoDB Setup Required:');
    console.log('   1. Install MongoDB: https://www.mongodb.com/try/download/community');
    console.log('   2. Start MongoDB service');
    console.log('   3. Or see MONGODB_SETUP.md for detailed instructions');
    console.log('');
    console.log('⚠️  Server will continue running but database features will not work.');
    console.log('   API will return appropriate error messages for database operations.');
  }
};

connectDB();

// Routes
app.use('/api/employees', require('./routes/employees'));
app.use('/api/attendance', require('./routes/attendance'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Employee Dashboard API is running!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  const health = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: {
      status: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
      readyState: mongoose.connection.readyState
    }
  };
  
  const statusCode = mongoose.connection.readyState === 1 ? 200 : 503;
  res.status(statusCode).json(health);
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated');
  });
});