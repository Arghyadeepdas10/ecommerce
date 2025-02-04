import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import cartReducer from "../Slice/cartSlice";
import authReducer from "../Slice/authSlice";

const persistCartConfig = {
  key: "cart", 
  storage,     
};

const persistAuthConfig = {
  key: "auth",
  storage,     
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const Store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(Store);
