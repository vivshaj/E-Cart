import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)         
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist}=wishListSlice.actions  // 'actions' required in components
//here exported as object bcz we also need to do 'remove from wishlist' 
export default wishListSlice.reducer  // slice required in reducer, so exported this .

//only 'reducer' can update 'store'
//components can only select the state in store and cannot update state


