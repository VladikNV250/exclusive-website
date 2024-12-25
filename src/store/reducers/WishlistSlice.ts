import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface WishlistState {
    productIDs: number[],
}

const initialState: WishlistState = {
    productIDs: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<number>) => {
            state.productIDs.push(action.payload);
        },
        removeFromWishlist: (state, action: PayloadAction<number>) => {
            state.productIDs = state.productIDs.filter(id => id !== action.payload);
        }
    },
});

export default wishlistSlice.reducer;