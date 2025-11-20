# Docker MongoDB Commands for MERN Employee Dashboard

## Quick Start (Recommended)
```bash
# Run the automated setup script
start-with-docker.bat
```

## Manual Docker Commands

### Start MongoDB with Docker Compose
```bash
# Start all services (MongoDB + Mongo Express)
docker-compose up -d

# View running containers
docker-compose ps

# View logs
docker-compose logs mongodb
```

### Stop MongoDB
```bash
# Stop all services
docker-compose down

# Stop and remove volumes (⚠️ This will delete all data)
docker-compose down -v
```

### MongoDB Container Management
```bash
# Start only MongoDB (without Mongo Express)
docker run -d \
  --name employee_mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password123 \
  -e MONGO_INITDB_DATABASE=employee_dashboard \
  -v mongodb_data:/data/db \
  mongo:7.0

# Stop MongoDB container
docker stop employee_mongodb

# Remove MongoDB container
docker rm employee_mongodb

# View MongoDB logs
docker logs employee_mongodb
```

## Database Access

### Connection Details
- **Host**: localhost
- **Port**: 27017
- **Username**: admin
- **Password**: password123
- **Database**: employee_dashboard
- **Connection String**: `mongodb://admin:password123@localhost:27017/employee_dashboard?authSource=admin`

### Access Methods

#### 1. Mongo Express (Web UI)
- URL: http://localhost:8081
- No authentication required (configured for development)

#### 2. MongoDB Shell (if installed)
```bash
mongosh "mongodb://admin:password123@localhost:27017/employee_dashboard?authSource=admin"
```

#### 3. MongoDB Compass (GUI Tool)
- Download from: https://www.mongodb.com/products/compass
- Connection String: `mongodb://admin:password123@localhost:27017/employee_dashboard?authSource=admin`

## Docker Volumes

### Data Persistence
- MongoDB data is stored in Docker volume: `mongodb_data`
- Data persists even when containers are stopped/restarted
- To completely reset database: `docker-compose down -v`

### Backup Database
```bash
# Backup
docker exec employee_dashboard_mongodb mongodump --uri="mongodb://admin:password123@localhost:27017/employee_dashboard?authSource=admin" --out=/backup

# Restore
docker exec employee_dashboard_mongodb mongorestore --uri="mongodb://admin:password123@localhost:27017/employee_dashboard?authSource=admin" /backup/employee_dashboard
```

## Troubleshooting

### Container Issues
```bash
# Check if Docker is running
docker info

# Check container status
docker-compose ps

# View container logs
docker-compose logs

# Restart containers
docker-compose restart
```

### Port Conflicts
If port 27017 or 8081 is already in use:

1. **For MongoDB (27017)**:
   Edit `docker-compose.yml`:
   ```yaml
   ports:
     - "27018:27017"  # Use different external port
   ```
   Update `.env`:
   ```
   MONGODB_URI=mongodb://admin:password123@localhost:27018/employee_dashboard?authSource=admin
   ```

2. **For Mongo Express (8081)**:
   Edit `docker-compose.yml`:
   ```yaml
   ports:
     - "8082:8081"  # Use different external port
   ```

### Clean Start
```bash
# Stop everything and remove volumes
docker-compose down -v

# Remove any orphaned containers
docker system prune -f

# Start fresh
docker-compose up -d
```

## Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://admin:password123@localhost:27017/employee_dashboard?authSource=admin
PORT=5000
NODE_ENV=development
```

### Docker Compose Environment
The docker-compose.yml file contains:
- MongoDB root credentials
- Database initialization
- Port mappings
- Volume configurations

## Production Considerations

For production deployment:
1. Change default passwords
2. Use environment variables for secrets
3. Enable MongoDB authentication
4. Use secure network configurations
5. Regular database backups
6. Monitor container health