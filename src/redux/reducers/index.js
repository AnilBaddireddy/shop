import addItem from "./addItem";
import User from "./user";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    addItem,
    User
})

export default rootReducers;