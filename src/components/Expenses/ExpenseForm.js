import React, { useRef } from 'react';
import {useDispatch} from 'react-redux'
import { amounActions } from '../Reducers/amount';
const ExpenseForm = (props) => {

const dispatch=useDispatch()

  const amountInputRef=useRef()
  const descriptionInputRef=useRef()
const catagoryInputRef=useRef()

const id=Math.random(Math.round()*100000000)


const submitHandler=(event)=>{

  event.preventDefault()

  const enteredAmount=amountInputRef.current.value;
  const enteredDescription=descriptionInputRef.current.value;
  const eteredCatagory=catagoryInputRef.current.value;

 




  
  props.onAddExpenses(enteredAmount,enteredDescription,eteredCatagory,id)

  dispatch(amounActions.addAmountHandler(+enteredAmount))

  console.log(amounActions.addAmountHandler(+enteredAmount))

}

  return (
    <div>
      <form onSubmit={submitHandler}>
      <div>
        <label>
          Amount
          <div>
            <input type='number'  ref={amountInputRef} required/>
          </div>
        </label>
      </div>
      <div>
        <label>
          Description
          <div>
            <input type='text'  ref={descriptionInputRef} required/>
          </div>
        </label>
      </div>
      <div>
        <label>
          Category
          <div>
            <select ref={catagoryInputRef}>
              <option >Food</option>
              <option>Petrol</option>
              <option>Salary</option>
            </select>
          </div>
        </label>
      </div>
      <div>
        <label>
          Add Expenses
          <div>
            <button>+</button>
          </div>
        </label>
      </div>
      </form>

    </div>
  );
}

export default ExpenseForm;
