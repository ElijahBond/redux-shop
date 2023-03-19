import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import purchasesSlice from "./purchasesSlice";

const store = configureStore({
    reducer: {
        cartSlice: cartSlice.reducer,
        purchasesSlice: purchasesSlice.reducer
    }
});

export default store;