import React, { useState  } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  };

  const editExpenseHandler = () => {
    setIsEditing(true);
  }

  const cancelEditHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={editExpenseHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={cancelEditHandler}/>}
    </div>
  );
};

export default NewExpense;
