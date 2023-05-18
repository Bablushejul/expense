import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./components/Reducers/expense";
import authReducer from "./components/Reducers/auth";
import themeReducer from "./components/Reducers/theme";
import amountReducer from "./components/Reducers/amount";




const store = configureStore({
    reducer:{auth: authReducer , expense: expenseReducer ,theme : themeReducer,amount:amountReducer}
})

export default store ;