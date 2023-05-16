import React from "react";

const ExpensesList = (props) => {
  return (
    <div>
      <ul>
        {props.expensess.map((expense) => (
          <li key={expense.id}>
            {expense.amount} {expense.description} {expense.catagory} <button>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
