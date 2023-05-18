import React,{useState} from "react";
import './Home.css'
import Layout from "../Layout/Layout";
import ExpenseForm from "../Expenses/ExpenseForm";
import ExpensesList from "../Expenses/ExpensesList";
import TotalAmount from "../Expenses/TotalAmount";
import { useDispatch } from "react-redux";
import { amounActions } from "../Reducers/amount";

const Home = () => {

const dispatch=useDispatch()

  const [expense,setExpense]=useState([])

  const expenseHandler=(uAmount,uDescription,uCatagory,uId)=>{
    setExpense((preExpenses)=>{
      return [...preExpenses,{amount:+uAmount,description:uDescription,catagory:uCatagory,id:uId}]
    })
  }

  const deleteHand =(id)=>{
    
    const neWexpense=expense.filter((item)=>item.id!==id)
    setExpense(neWexpense)

   


  }


  return (
    <div>
      <Layout />
      <ExpenseForm onAddExpenses={expenseHandler}/>
      
     {expense.length>0 && <ExpensesList expensess={expense} onDelete={deleteHand}/>}

     <TotalAmount expenses={expense}/>
      
    </div>
  );
};

export default Home;
