
import { configureStore } from "@reduxjs/toolkit";

// import userReducer from "./features/userSlice"
// export const  store = configureStore({
//     reducer:{
//         user:userReducer
//     }
// })


import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;


// const store = configureStore({
//     reducer:{}
// })
// console.log(store);
