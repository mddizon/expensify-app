export default (expenses) => {
  return expenses
    .map(expense => expense.amount)
    .reduce((amount, currentTotal) => amount + currentTotal, 0);
};