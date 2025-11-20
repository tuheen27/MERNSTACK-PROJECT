// MongoDB initialization script
// This script runs when the container starts for the first time

// Switch to the employee_dashboard database
db = db.getSiblingDB('employee_dashboard');

// Create collections with some sample data
db.createCollection('employees');
db.createCollection('attendances');

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
  }
]);

print('✅ Sample employees inserted successfully');

// Create indexes for better performance
db.employees.createIndex({ "email": 1 }, { unique: true });
db.employees.createIndex({ "employeeId": 1 }, { unique: true });
db.attendances.createIndex({ "employee": 1, "date": 1 }, { unique: true });

print('✅ Database indexes created successfully');
print('✅ Employee Dashboard database setup complete!');