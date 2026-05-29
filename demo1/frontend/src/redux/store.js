import {createStore} from "redux"
import { reducer } from "./rootReducer.js"
import {thunk} from "redux-thunk"
import { applyMiddleware } from "redux"

console.log("reducer",reducer)

export const store = createStore(reducer,applyMiddleware(thunk))