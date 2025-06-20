import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    userSelectedOrderType: null,
    userPickupModal: false,
    isGuest: false,
    userAddresses: [],
    myOrders: [],
    activeProductCat: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setUserSelectedOrderType: (state, action) => {
            state.userSelectedOrderType = action.payload;
        },
        setUserPickupModal: (state, action) => {
            state.userPickupModal = action.payload;
        },
        setIsGuest: (state, action) => {
            state.isGuest = action.payload;
        },
        setUserAddress: (state, action) => {
            state.userAddresses = action.payload;
        },
        setMyOrders: (state, action) => {
            state.myOrders = action.payload;
        },
        setActiveProductCat: (state, action) => {
            state.activeProductCat = action.payload;
        }
    }
});

export const { setCurrentUser, setUserSelectedOrderType, setUserPickupModal, setActiveProductCat, setIsGuest, setUserAddress, myOrders } = userSlice.actions;
export default userSlice.reducer;
