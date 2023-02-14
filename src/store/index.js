import { combineReducers, createStore } from "redux";
import authReducer from "./auth/authReducer";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({ auth: authReducer, todo: todoReducer });

export const store = createStore(rootReducer);
