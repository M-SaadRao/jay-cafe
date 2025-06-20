import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session'; // Import session storage from redux-persist
import { persistReducer } from 'redux-persist';
import userReducer from './user/userSlice';
import productReducer from './product/productSlice';
import cartReducer from './cart/cartSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: storageSession, // Use session storage instead of local storage
    whitelist: ['user', 'cart'], // Specify the states you want to persist
};

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
