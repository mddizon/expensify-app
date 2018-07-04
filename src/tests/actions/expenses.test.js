import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123', { note: 'Updated Note' });

  expect(action).toEqual({
    id: '123',
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'Updated Note'
    }
  });
});

test('should setup add expense action object with values', () => {
  const expenseData = {
    description: 'Rent', 
    note: 'Last months rent', 
    amount: 94100, 
    createdAt: 1000
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup add expense action object with defaults', () => {
  const defaultData = {
    description: '', 
    note: '', 
    amount: 0, 
    createdAt: 0
  };

  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultData,
      id: expect.any(String)
    }
  })
});