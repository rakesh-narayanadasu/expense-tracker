
const API_BASE_URL = 'http://localhost:3001/api';

export interface CreateExpenseRequest {
  item_name: string;
  amount: number;
}

export interface Expense {
  id: number;
  item_name: string;
  amount: number;
  created_at: string;
}

class ExpenseAPI {
  async getAllExpenses(): Promise<Expense[]> {
    const response = await fetch(`${API_BASE_URL}/expenses`);
    if (!response.ok) {
      throw new Error('Failed to fetch expenses');
    }
    return response.json();
  }

  async createExpense(expense: CreateExpenseRequest): Promise<Expense> {
    const response = await fetch(`${API_BASE_URL}/expenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create expense');
    }
    return response.json();
  }

  async deleteExpense(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete expense');
    }
  }

  async updateExpense(id: number, expense: CreateExpenseRequest): Promise<Expense> {
    const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update expense');
    }
    return response.json();
  }
}

export const expenseAPI = new ExpenseAPI();
