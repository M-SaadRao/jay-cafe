// src/store/location/locationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedLocation: null, // 'texas', 'lakejackson', or 'needville'
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.selectedLocation = action.payload;
        }
    }
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
