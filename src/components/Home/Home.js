import React,{useState} from "react";
import './Home.css'
import Layout from "../Layout/Layout";
import ExpenseForm from "../Expenses/ExpenseForm";
import ExpensesList from "../Expenses/ExpensesList";

const Home = () => {

  const [expense,setExpense]=useState([])

  const expenseHandler=(uAmount,uDescription,uCatagory)=>{
    setExpense((preExpenses)=>{
      return [...preExpenses,{amount:uAmount,description:uDescription,catagory:uCatagory,id:Math.random().toString}]
    })
  }

  return (
    <div>
      <Layout />
      <ExpenseForm onAddExpenses={expenseHandler}/>
      <ExpensesList expensess={expense}/>
    </div>
  );
};

export default Home;
