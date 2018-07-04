import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, dispatch, description, amount, createdAt }) => (
  <div>
    <h3>Expense: {description}</h3>
    <p>Amount: {amount}</p>
    <p>CreatedAt: {createdAt}</p>
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;
