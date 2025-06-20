import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalPrice: null,
    partyPreBooking: null,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeCartItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.cartItemId !== action.payload);
        },
        addQty: (state, action) => {
            let item = state.cartItems.find(cartItem => cartItem.cartItemId === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        setCart: (state, action) => {
            state.cartItems = action.payload;
        },
        setCartPrice: (state, action) => {
            state.cartTotalPrice = action.payload;
        },
        setPartPreBooking: (state, action) => {
            state.partyPreBooking = action.payload;
        }
    }
});

export const { addCartItem, removeCartItem, addQty, setCart, setCartPrice, setPartPreBooking } = cartSlice.actions;
export default cartSlice.reducer;
