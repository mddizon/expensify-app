import React from 'react';
import { connect } from 'react-redux';
import numeral from "numeral";
import selectExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({num_expenses, total_expenses}) => {
  const word = num_expenses === 1 ? 'expense' : 'expenses';
  return (
  <div>
    <h3>
      Viewing {num_expenses} {word} totalling {numeral(total_expenses/100).format('$0,0.00')}
    </h3>
  </div>
)};

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters)
  return {
    num_expenses: expenses.length || 0,
    total_expenses: getExpenseTotal(expenses) || 0
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

