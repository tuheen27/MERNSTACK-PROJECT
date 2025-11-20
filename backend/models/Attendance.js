const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: function() {
      // Set to start of current day
      const today = new Date();
      return new Date(today.getFullYear(), today.getMonth(), today.getDate());
    }
  },
  checkIn: {
    type: Date,
    default: Date.now
  },
  checkOut: {
    type: Date
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late', 'half-day'],
    default: 'present'
  },
  notes: {
    type: String,
    trim: true
  },
  workingHours: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Compound index to ensure one attendance record per employee per day
attendanceSchema.index({ employee: 1, date: 1 }, { unique: true });

// Calculate working hours before saving
attendanceSchema.pre('save', function(next) {
  if (this.checkIn && this.checkOut) {
    const diffMs = this.checkOut - this.checkIn;
    this.workingHours = Math.round((diffMs / (1000 * 60 * 60)) * 100) / 100; // Hours with 2 decimal places
  }
  next();
});

module.exports = mongoose.model('Attendance', attendanceSchema);