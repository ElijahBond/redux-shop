import { createSlice } from "@reduxjs/toolkit";

const INITIAL_PURCHASES_STATE = {
    count: 0,
    value: 8,
    totalValue: 0
};

console.log(INITIAL_PURCHASES_STATE)

const purchasesSlice = createSlice({
    name: 'purchasesSlice',
    initialState: INITIAL_PURCHASES_STATE,
    reducers: {
        increaseProduct(state) {
            state.count += 1
            state.totalValue = (state.count * state.value).toFixed(2);
        },

        decreaseProduct(state) {
            if (state.count <= 0) return
            
            state.count -= 1
            state.totalValue = (state.count * state.value).toFixed(2);
        }
    }
});


export const purchasesActions = purchasesSlice.actions;
export default purchasesSlice;