import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART_STATE = {
    isVisible: true
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: INITIAL_CART_STATE,
    reducers: {
        setCartVisible(state) {
            state.isVisible = !state.isVisible;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;