import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart: [],
    },
    reducers:{
        addtocart:(state,action)=>{

            const existing = state.cart.find((item)=>item.id === action.payload.id)
            if(existing){
                return{
                    ...state,
                    cart:state.cart.map((item)=>item.id === action.payload.id ? {...item, qty:item.qty+1} : item)
                }
            }else

            return{
                ...state,
                cart: [...state.cart,{...action.payload, qty:1}]
            }
        },
        deleteitem:(state,action)=>{
            return{
                ...state,
                cart: state.cart.filter((item)=> item.id!== action.payload)
            }
        },
        addqty:(state,action)=>{
            return{
                ...state,
                cart:state.cart.map((item)=>item.id === action.payload.id ? {...item, qty:item.qty+1} : item)
            }
        },
        subqty:(state,action)=>{
            return{
                ...state,
                cart:state.cart.map((item)=>item.id === action.payload.id ? {...item, qty:Math.max(1,item.qty-1)} : item)
            }
        }
    }
})

export const {addtocart, deleteitem, addqty, subqty} = cartSlice.actions;
export default cartSlice.reducer;