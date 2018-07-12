import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({id, description, amount, note, createdAt}) => {
    expenseData[id] = {description, amount, note, createdAt};
  });
  database.ref('expenses').set(expenseData).then(() => { done() });
});

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
  const expenseData = expenses[0];
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  })
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData =  {
    description: 'Mouse',
    amount: 3000,
    note: 'New Mouse',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const defaultData = {
    description: '', 
    note: '', 
    amount: 0, 
    createdAt: 0
  };

  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultData);
    done();
  });
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});


test('should fetch expenses from firebase', (done) => {
  const store = createMockStore();
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
  });
});