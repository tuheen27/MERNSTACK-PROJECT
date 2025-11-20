// Mock data for development without MongoDB
const mockEmployees = [
  {
    _id: '1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    position: 'Software Developer',
    department: 'IT',
    employeeId: 'EMP001',
    phone: '+1-555-0123',
    joinDate: new Date('2023-01-15'),
    status: 'active',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    position: 'Product Manager',
    department: 'Marketing',
    employeeId: 'EMP002',
    phone: '+1-555-0124',
    joinDate: new Date('2023-02-20'),
    status: 'active',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    position: 'DevOps Engineer',
    department: 'IT',
    employeeId: 'EMP003',
    phone: '+1-555-0125',
    joinDate: new Date('2023-03-10'),
    status: 'active',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    position: 'HR Manager',
    department: 'HR',
    employeeId: 'EMP004',
    phone: '+1-555-0126',
    joinDate: new Date('2023-01-05'),
    status: 'active',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const mockAttendance = [
  {
    _id: 'att1',
    employee: {
      _id: '1',
      name: 'John Doe',
      employeeId: 'EMP001',
      position: 'Software Developer',
      department: 'IT'
    },
    date: new Date(new Date().setHours(0,0,0,0)),
    checkIn: new Date(new Date().setHours(9, 0, 0, 0)),
    checkOut: new Date(new Date().setHours(17, 30, 0, 0)),
    status: 'present',
    workingHours: 8.5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 'att2',
    employee: {
      _id: '2',
      name: 'Jane Smith',
      employeeId: 'EMP002',
      position: 'Product Manager',
      department: 'Marketing'
    },
    date: new Date(new Date().setHours(0,0,0,0)),
    checkIn: new Date(new Date().setHours(8, 45, 0, 0)),
    status: 'present',
    workingHours: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  mockEmployees,
  mockAttendance
};