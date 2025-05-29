
-- MySQL Schema for Expense Tracker Application
-- Create the database
CREATE DATABASE IF NOT EXISTS expense_tracker;
USE expense_tracker;

-- Create expenses table
CREATE TABLE IF NOT EXISTS expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Indexes for better performance
    INDEX idx_created_at (created_at),
    INDEX idx_amount (amount),
    INDEX idx_item_name (item_name)
);

-- Insert sample data for testing
INSERT INTO expenses (item_name, amount) VALUES
('Groceries', 85.50),
('Gas', 45.00),
('Coffee', 4.75),
('Lunch', 12.99),
('Movie Tickets', 25.00),
('Uber Ride', 18.50),
('Books', 35.99);

-- Create a view for expense summaries
CREATE VIEW expense_summary AS
SELECT 
    COUNT(*) as total_expenses,
    SUM(amount) as total_amount,
    AVG(amount) as average_amount,
    MIN(amount) as min_amount,
    MAX(amount) as max_amount,
    DATE(created_at) as expense_date
FROM expenses 
GROUP BY DATE(created_at)
ORDER BY expense_date DESC;

-- Create a stored procedure to get expenses by date range
DELIMITER //
CREATE PROCEDURE GetExpensesByDateRange(
    IN start_date DATE,
    IN end_date DATE
)
BEGIN
    SELECT * FROM expenses 
    WHERE DATE(created_at) BETWEEN start_date AND end_date
    ORDER BY created_at DESC;
END //
DELIMITER ;

-- Create a stored procedure to get monthly expense totals
DELIMITER //
CREATE PROCEDURE GetMonthlyExpenseTotals()
BEGIN
    SELECT 
        YEAR(created_at) as year,
        MONTH(created_at) as month,
        MONTHNAME(created_at) as month_name,
        COUNT(*) as total_expenses,
        SUM(amount) as total_amount,
        AVG(amount) as average_amount
    FROM expenses 
    GROUP BY YEAR(created_at), MONTH(created_at)
    ORDER BY year DESC, month DESC;
END //
DELIMITER ;

-- Show table structure
DESCRIBE expenses;

-- Show sample data
SELECT * FROM expenses ORDER BY created_at DESC LIMIT 5;
