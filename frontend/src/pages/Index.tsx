
import { useState, useEffect } from "react";
import { Plus, Trash2, DollarSign, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ExpenseList from "@/components/ExpenseList";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseStats from "@/components/ExpenseStats";

export interface Expense {
  id: number;
  item_name: string;
  amount: number;
  created_at: string;
}

const Index = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Mock data for demonstration (will be replaced with actual API calls)
  useEffect(() => {
    const mockExpenses: Expense[] = [
      { id: 1, item_name: "Groceries", amount: 85.50, created_at: "2024-01-15" },
      { id: 2, item_name: "Gas", amount: 45.00, created_at: "2024-01-14" },
      { id: 3, item_name: "Coffee", amount: 4.75, created_at: "2024-01-13" },
    ];
    setExpenses(mockExpenses);
  }, []);

  const addExpense = async (itemName: string, amount: number) => {
    setLoading(true);
    try {
      // Mock API call - replace with actual backend call
      const newExpense: Expense = {
        id: Date.now(),
        item_name: itemName,
        amount: amount,
        created_at: new Date().toISOString().split('T')[0]
      };
      
      setExpenses(prev => [newExpense, ...prev]);
      toast({
        title: "Expense Added",
        description: `Added ${itemName} for $${amount.toFixed(2)}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add expense",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteExpense = async (id: number) => {
    try {
      // Mock API call - replace with actual backend call
      setExpenses(prev => prev.filter(expense => expense.id !== id));
      toast({
        title: "Expense Deleted",
        description: "Expense has been removed",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete expense",
        variant: "destructive",
      });
    }
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Receipt className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800">Expense Tracker</h1>
          </div>
          <p className="text-slate-600 text-lg">Track your daily expenses with ease</p>
        </div>

        {/* Stats */}
        <ExpenseStats total={totalExpenses} count={expenses.length} />

        {/* Add Expense Form */}
        <ExpenseForm onAddExpense={addExpense} loading={loading} />

        {/* Expenses List */}
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </div>
    </div>
  );
};

export default Index;
