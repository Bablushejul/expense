import { createSlice } from "@reduxjs/toolkit";


const initialState={totalAmount:0,id:''}


const amountSlice=createSlice({
    name:'total',
    initialState,
    reducers:{
        addAmountHandler(state,action){
        state.totalAmount=+state.totalAmount+(+action.payload)
        },
        removeAmountHandler(state,action){
            state.totalAmount=+state.totalAmount-action.payload;
            
            
    
        },
       
    }
})


const amountReducer=amountSlice.reducer

export const amounActions=amountSlice.actions;

export default amountReducer;