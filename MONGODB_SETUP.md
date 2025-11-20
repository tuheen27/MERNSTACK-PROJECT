# MongoDB Setup Instructions

## Option 1: Install MongoDB Community Edition Locally

### Windows Installation:

1. Download MongoDB Community Edition from: https://www.mongodb.com/try/download/community
2. Run the installer and follow the installation wizard
3. Start MongoDB service:
   ```powershell
   # Using Services (Recommended)
   # Open Services (services.msc) and start "MongoDB" service
   
   # Or using Command Line
   net start MongoDB
   ```
4. Verify installation:
   ```powershell
   mongosh
   # This should connect to MongoDB shell
   ```

### Alternative: Use MongoDB Atlas (Cloud Database)

1. Create account at: https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update backend/.env file with Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/employee_dashboard?retryWrites=true&w=majority
   ```

## Option 2: Using Docker (If you have Docker installed)

```bash
# Run MongoDB in Docker container
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Stop container
docker stop mongodb

# Start container
docker start mongodb
```

## Troubleshooting

### If you see connection errors:
1. Make sure MongoDB service is running
2. Check if port 27017 is available
3. Verify the MONGODB_URI in backend/.env

### Default MongoDB Connection:
- Host: localhost
- Port: 27017
- Database: employee_dashboard (will be created automatically)

## Testing Database Connection

You can test your MongoDB connection using MongoDB Shell:

```bash
# Connect to database
mongosh

# Switch to employee database
use employee_dashboard

# List collections (should be empty initially)
show collections

# Exit
exit
```