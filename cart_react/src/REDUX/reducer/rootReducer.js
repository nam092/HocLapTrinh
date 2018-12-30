

import { combineReducers } from "redux";
import product from './product';
import cartReducer from './cart_reducer';
import Message_Reducer from './Message_Reducer';
const rootReducer = combineReducers({
    product,
    cartReducer,
    Message_Reducer
});

export default rootReducer;