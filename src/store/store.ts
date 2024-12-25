import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductSlice";
import routeReducer from "./reducers/RouteSlice";
import wishlistReducer from "./reducers/WishlistSlice";

const rootReducer = combineReducers({
    productReducer,
    routeReducer,
    wishlistReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];