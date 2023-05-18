import React from 'react';
import { useSelector } from 'react-redux'


const TotalAmount = (props) => {

  const isAmount = useSelector((state)=>+state.amount.totalAmount)

console.log(isAmount)


  return (
    <div>
      <h1>Total Expenses</h1>
      <h1>{isAmount}</h1>
    </div>
  );
}

export default TotalAmount;