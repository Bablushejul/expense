import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./components/Reducers/expense";
import authReducer from "./components/Reducers/auth";
import themeReducer from "./components/Reducers/theme";




const store = configureStore({
    reducer:{auth: authReducer , expense: expenseReducer ,theme : themeReducer}
})

export default store ;