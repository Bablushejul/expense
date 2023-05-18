import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { expenseStates } from "../Reducers/expense";
import { amounActions } from "../Reducers/amount";

const ExpensesList = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {props.expensess.map((expense) => (
          <li key={expense.id} id={expense.id}>
            {console.log(expense.id)}
            {expense.amount} {expense.description} {expense.catagory}{" "}
            <button
          onClick={()=>props.onDelete(expense.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
