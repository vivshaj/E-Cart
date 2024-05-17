import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./Slice/wishListSlice";
import cartSlice from "./Slice/cartSlice";

const store = configureStore({
    reducer:{
        wishListReducer:wishListSlice ,
        cartReducer:cartSlice
    }
})
//we add this store to 'main.jsx' file using 'Provider' element to allow us to use this anywhere in the application , like all components
//initially in redux , action,reducer,etc were independent. But nowadays we use 'slice' to combine both action & reducer into a single file .

export default store 