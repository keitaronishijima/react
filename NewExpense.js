import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log("in NewExpense.js")
        console.log(expenseData)
        props.onAddExpense(expenseData);
    };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
