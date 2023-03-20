import { createSlice } from "@reduxjs/toolkit";

const INITIAL_PURCHASES_STATE = {
    items: [],
    itemsQuantity: 0,
};

const purchasesSlice = createSlice({
    name: 'purchasesSlice',
    initialState: INITIAL_PURCHASES_STATE,
    reducers: {
        increaseProduct(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.itemsQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity
            }
        },

        decreaseProduct(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id);
            state.itemsQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        },

        updateCart(state, action) {
            state.itemsQuantity = action.payload.itemsQuantity;
            state.items = action.payload.items;

        }
    }
});

const sendCartData = (cartData) => {
    return (dispatchAction) => {
        dispatchAction()
    }
}

export const purchasesActions = purchasesSlice.actions;
export default purchasesSlice;