
import { DollarSign, TrendingUp, Receipt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExpenseStatsProps {
  total: number;
  count: number;
}

const ExpenseStats = ({ total, count }: ExpenseStatsProps) => {
  const average = count > 0 ? total / count : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border-0 transform hover:scale-105 transition-transform duration-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Total Expenses</p>
              <p className="text-3xl font-bold">${total.toFixed(2)}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <DollarSign className="h-8 w-8" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg border-0 transform hover:scale-105 transition-transform duration-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Items</p>
              <p className="text-3xl font-bold">{count}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Receipt className="h-8 w-8" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg border-0 transform hover:scale-105 transition-transform duration-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Average</p>
              <p className="text-3xl font-bold">${average.toFixed(2)}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <TrendingUp className="h-8 w-8" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseStats;
