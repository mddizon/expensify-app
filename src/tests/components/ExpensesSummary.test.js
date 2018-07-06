import React from 'react';
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test('should render ExpensesSummary correctly with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary num_expenses="1" total_expenses="123"/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary num_expenses="2" total_expenses="123"/>);
  expect(wrapper).toMatchSnapshot();
});

