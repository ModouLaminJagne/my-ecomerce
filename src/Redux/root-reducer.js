import { combineReducers } from "redux";
import userReducer from "./User/user-reducer";
import CartReducer from "./Cart/cart-reducer";
import directoryReducer from "./directory/directory.reducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer
})
