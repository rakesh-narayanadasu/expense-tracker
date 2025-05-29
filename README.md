
# Expense Tracker Backend

A RESTful API for managing personal expenses built with Node.js, Express, and MySQL.

## Features

- Create, read, update, and delete expenses
- MySQL database with optimized schema
- Input validation and error handling
- CORS enabled for frontend integration
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your database credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Expense@123
DB_NAME=expense_tracker
DB_PORT=3306
PORT=3001
```

5. Set up the database:
```bash
# Connect to MySQL and run the schema
sudo mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Expense@123';
FLUSH PRIVILEGES;
mysql -u root -p expense_tracker < database/schema.sql
```

## Running the Server

### Development mode:
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:3001`

## API Endpoints

### Get All Expenses
```
GET /api/expenses
```

### Create New Expense
```
POST /api/expenses
Content-Type: application/json

{
  "item_name": "Groceries",
  "amount": 85.50
}
```

### Update Expense
```
PUT /api/expenses/:id
Content-Type: application/json

{
  "item_name": "Updated Item",
  "amount": 95.00
}
```

### Delete Expense
```
DELETE /api/expenses/:id
```

### Health Check
```
GET /api/health
```

## Database Schema

The application uses a MySQL database with the following structure:

### expenses table
- `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
- `item_name` (VARCHAR(255), NOT NULL)
- `amount` (DECIMAL(10,2), NOT NULL)
- `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

## Security Features

- Input validation for all endpoints
- SQL injection prevention using prepared statements
- CORS configuration for cross-origin requests
- Environment variables for sensitive configuration

## Development

To run with auto-reload during development:
```bash
npm run dev
```

## Testing

You can test the API using tools like:
- Postman
- curl
- Thunder Client (VS Code extension)

Example curl command:
```bash
curl -X POST http://localhost:3001/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"item_name": "Test Expense", "amount": 25.99}'
```
</lov-write>
