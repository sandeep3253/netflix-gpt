import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./Slice";

const appstore = configureStore({
    reducer:{
        user:useReducer,
    },
});
export default appstore;
