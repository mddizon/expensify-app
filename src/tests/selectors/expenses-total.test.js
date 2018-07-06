import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test('should return 0 if no expenses', () => {
  const result = getExpensesTotal([]);

  expect(result).toBe(0);
});

test('should correctly add one expense', () => {
  const result = getExpensesTotal([ expenses[0] ]);

  expect(result).toBe(expenses[0].amount);
});

test('should correctly add multiple expenses', () => {
  const expected = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  const result = getExpensesTotal([ expenses[0], expenses[1], expenses[2]]);

  expect(result).toBe(expected);
});

