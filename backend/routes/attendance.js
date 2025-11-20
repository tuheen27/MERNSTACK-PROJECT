const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');
const Employee = require('../models/Employee');

// Get all attendance records
router.get('/', async (req, res) => {
  try {
    const { date, employeeId } = req.query;
    let filter = {};

    if (date) {
      const targetDate = new Date(date);
      const startOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
      const endOfDay = new Date(startOfDay);
      endOfDay.setDate(endOfDay.getDate() + 1);
      
      filter.date = { $gte: startOfDay, $lt: endOfDay };
    }

    if (employeeId) {
      filter.employee = employeeId;
    }

    const attendance = await Attendance.find(filter)
      .populate('employee', 'name employeeId position department')
      .sort({ date: -1, checkIn: -1 });

    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance records', error: error.message });
  }
});

// Mark attendance (check-in)
router.post('/checkin', async (req, res) => {
  try {
    const { employeeId } = req.body;

    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    // Check if attendance already marked for today
    const existingAttendance = await Attendance.findOne({
      employee: employeeId,
      date: startOfDay
    });

    if (existingAttendance) {
      return res.status(400).json({ 
        message: 'Attendance already marked for today',
        attendance: existingAttendance 
      });
    }

    const attendance = new Attendance({
      employee: employeeId,
      date: startOfDay,
      checkIn: new Date(),
      status: 'present'
    });

    const savedAttendance = await attendance.save();
    await savedAttendance.populate('employee', 'name employeeId position department');

    res.status(201).json(savedAttendance);
  } catch (error) {
    res.status(400).json({ message: 'Error marking attendance', error: error.message });
  }
});

// Mark check-out
router.post('/checkout', async (req, res) => {
  try {
    const { employeeId } = req.body;

    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const attendance = await Attendance.findOne({
      employee: employeeId,
      date: startOfDay
    }).populate('employee', 'name employeeId position department');

    if (!attendance) {
      return res.status(404).json({ message: 'No check-in record found for today' });
    }

    if (attendance.checkOut) {
      return res.status(400).json({ message: 'Already checked out for today' });
    }

    attendance.checkOut = new Date();
    await attendance.save();

    res.json(attendance);
  } catch (error) {
    res.status(400).json({ message: 'Error checking out', error: error.message });
  }
});

// Get today's attendance summary
router.get('/today', async (req, res) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(endOfDay.getDate() + 1);

    const todayAttendance = await Attendance.find({
      date: { $gte: startOfDay, $lt: endOfDay }
    }).populate('employee', 'name employeeId position department');

    const totalEmployees = await Employee.countDocuments({ status: 'active' });
    const presentCount = todayAttendance.length;
    const absentCount = totalEmployees - presentCount;

    res.json({
      date: startOfDay,
      total: totalEmployees,
      present: presentCount,
      absent: absentCount,
      attendanceRecords: todayAttendance
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching today\'s attendance', error: error.message });
  }
});

// Update attendance status
router.put('/:id', async (req, res) => {
  try {
    const { status, notes } = req.body;

    const attendance = await Attendance.findById(req.params.id);
    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    attendance.status = status || attendance.status;
    attendance.notes = notes || attendance.notes;

    await attendance.save();
    await attendance.populate('employee', 'name employeeId position department');

    res.json(attendance);
  } catch (error) {
    res.status(400).json({ message: 'Error updating attendance', error: error.message });
  }
});

// Delete attendance record
router.delete('/:id', async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id);
    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    await Attendance.findByIdAndDelete(req.params.id);
    res.json({ message: 'Attendance record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting attendance record', error: error.message });
  }
});

module.exports = router;