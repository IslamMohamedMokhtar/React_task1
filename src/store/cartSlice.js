import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action){
            //state.cartItems.push(action.payload.id);
            const itemindex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            
            if(itemindex >= 0){
                state.cartItems[itemindex].cartQuantity += 1;
                toast.info("increase product quantity",{
                    position: "bottom-left",
                });
            } else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.success("prodact has been added to cart",{
                    position: "bottom-left",
                });
            }
            state.cartTotalQuantity += 1;
            state.cartTotalAmount += action.payload.price;
        },
        clearCart(state, action){
            state.cartItems = [];
            state.cartTotalQuantity = 0;
            state.cartTotalAmount = 0;
            toast.error("Cart cleared", {
                position: "bottom-left",
            });
        }
    }
});

export const {addToCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;