import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: null,
    allCategories: null,
    activeProductCat: null,
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        setAllCategories: (state, action) => {
            state.allCategories = action.payload;
        },

    }
});

export const { setAllCategories, setAllProducts } = productSlice.actions;
export default productSlice.reducer;
