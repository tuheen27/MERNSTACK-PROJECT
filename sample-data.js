// Sample data for testing the Employee Dashboard
// You can use this data to quickly populate your application for testing

const sampleEmployees = [
  {
    name: "John Doe",
    email: "john.doe@company.com",
    position: "Software Developer",
    department: "IT",
    employeeId: "EMP001",
    phone: "+1-555-0123"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@company.com",
    position: "Product Manager",
    department: "Marketing",
    employeeId: "EMP002",
    phone: "+1-555-0124"
  },
  {
    name: "Mike Johnson",
    email: "mike.johnson@company.com",
    position: "DevOps Engineer",
    department: "IT",
    employeeId: "EMP003",
    phone: "+1-555-0125"
  },
  {
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    position: "HR Manager",
    department: "HR",
    employeeId: "EMP004",
    phone: "+1-555-0126"
  },
  {
    name: "David Brown",
    email: "david.brown@company.com",
    position: "Financial Analyst",
    department: "Finance",
    employeeId: "EMP005",
    phone: "+1-555-0127"
  },
  {
    name: "Lisa Anderson",
    email: "lisa.anderson@company.com",
    position: "Sales Representative",
    department: "Sales",
    employeeId: "EMP006",
    phone: "+1-555-0128"
  },
  {
    name: "Robert Taylor",
    email: "robert.taylor@company.com",
    position: "Operations Manager",
    department: "Operations",
    employeeId: "EMP007",
    phone: "+1-555-0129"
  },
  {
    name: "Emily Davis",
    email: "emily.davis@company.com",
    position: "UX Designer",
    department: "IT",
    employeeId: "EMP008",
    phone: "+1-555-0130"
  }
];

// MongoDB Script to insert sample data
// Run this in MongoDB shell (mongosh) or MongoDB Compass

/*
// Connect to your database
use employee_dashboard

// Insert sample employees
db.employees.insertMany([
  {
    name: "John Doe",
    email: "john.doe@company.com",
    position: "Software Developer",
    department: "IT",
    employeeId: "EMP001",
    phone: "+1-555-0123",
    joinDate: new Date("2023-01-15"),
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Jane Smith",
    email: "jane.smith@company.com",
    position: "Product Manager",
    department: "Marketing",
    employeeId: "EMP002",
    phone: "+1-555-0124",
    joinDate: new Date("2023-02-20"),
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Mike Johnson",
    email: "mike.johnson@company.com",
    position: "DevOps Engineer",
    department: "IT",
    employeeId: "EMP003",
    phone: "+1-555-0125",
    joinDate: new Date("2023-03-10"),
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    position: "HR Manager",
    department: "HR",
    employeeId: "EMP004",
    phone: "+1-555-0126",
    joinDate: new Date("2023-01-05"),
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "David Brown",
    email: "david.brown@company.com",
    position: "Financial Analyst",
    department: "Finance",
    employeeId: "EMP005",
    phone: "+1-555-0127",
    joinDate: new Date("2023-04-12"),
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date()
  }
])

// Verify the data was inserted
db.employees.find().pretty()

// Create some sample attendance records for today
// Note: You'll need to replace the ObjectIds with actual IDs from your employees collection

// First, get employee IDs
db.employees.find({}, {_id: 1, name: 1, employeeId: 1})

// Then create attendance records using actual employee ObjectIds
// Example (replace ObjectIds with your actual employee IDs):
db.attendances.insertMany([
  {
    employee: ObjectId("YOUR_EMPLOYEE_OBJECTID_HERE"),
    date: new Date(new Date().setHours(0,0,0,0)),
    checkIn: new Date(),
    status: "present",
    createdAt: new Date(),
    updatedAt: new Date()
  }
])
*/

module.exports = sampleEmployees;