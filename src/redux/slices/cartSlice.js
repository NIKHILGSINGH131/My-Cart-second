import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartSlice',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const cartIteam=state.cart.find(iteam=> iteam.id==action.payload)
            if(cartIteam){
                cartIteam.quantity += 1;
                return
            }
            state.cart.push({
                quantity:1,
                id: action.payload
            })
        },
        removeFromCart:(state,action)=>{
            const cartIteam=state.cart.find(iteam=> iteam.id=action.payload)
            if(cartIteam){
                cartIteam.quantity -= 1;
                if(cartIteam.quantity==0){
                    state.cart=state.cart.filter(iteam=>iteam.id !=action.payload)
                }
            }
            
        }

    }
})

export const {addToCart,removeFromCart}= cartSlice.actions;

export default cartSlice.reducer;