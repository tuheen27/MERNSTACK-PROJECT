const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Attendance = require('../models/Attendance');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find({ status: 'active' }).sort({ createdAt: -1 });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error: error.message });
  }
});

// Get single employee
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error: error.message });
  }
});

// Add new employee
router.post('/', async (req, res) => {
  try {
    const { name, email, position, department, employeeId, phone } = req.body;

    // Check if employee with same email or employeeId exists
    const existingEmployee = await Employee.findOne({
      $or: [{ email }, { employeeId }]
    });

    if (existingEmployee) {
      return res.status(400).json({ 
        message: 'Employee with this email or employee ID already exists' 
      });
    }

    const employee = new Employee({
      name,
      email,
      position,
      department,
      employeeId,
      phone
    });

    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: 'Error creating employee', error: error.message });
  }
});

// Update employee
router.put('/:id', async (req, res) => {
  try {
    const { name, email, position, department, employeeId, phone, status } = req.body;
    
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Check if email or employeeId is being changed and already exists
    if (email !== employee.email || employeeId !== employee.employeeId) {
      const existingEmployee = await Employee.findOne({
        _id: { $ne: req.params.id },
        $or: [{ email }, { employeeId }]
      });

      if (existingEmployee) {
        return res.status(400).json({ 
          message: 'Employee with this email or employee ID already exists' 
        });
      }
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, email, position, department, employeeId, phone, status },
      { new: true, runValidators: true }
    );

    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: 'Error updating employee', error: error.message });
  }
});

// Delete employee (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Soft delete by setting status to inactive
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { status: 'inactive' },
      { new: true }
    );

    res.json({ message: 'Employee removed successfully', employee: updatedEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Error removing employee', error: error.message });
  }
});

// Get employee attendance summary
router.get('/:id/attendance', async (req, res) => {
  try {
    const { id } = req.params;
    const { month, year } = req.query;

    let dateFilter = { employee: id };
    
    if (month && year) {
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0);
      dateFilter.date = { $gte: startDate, $lte: endDate };
    }

    const attendance = await Attendance.find(dateFilter)
      .populate('employee', 'name employeeId')
      .sort({ date: -1 });

    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance', error: error.message });
  }
});

module.exports = router;