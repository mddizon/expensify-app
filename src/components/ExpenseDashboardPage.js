import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
  <div>
    Hello World
    <ExpenseListFilters /> 
    <ExpenseList /> 
  </div>
);

export default ExpenseDashboardPage;