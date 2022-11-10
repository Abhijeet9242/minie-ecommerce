import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import { cartReducer, orderReducer, productReducer } from "./reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    products:productReducer,
    cart:cartReducer,
    orders:orderReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))