import { wishlistSlice } from "@/store/reducers/WishlistSlice";
import { RootState } from "@/store/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

export default function addToWishlist(dispatch: ThunkDispatch<RootState, undefined, UnknownAction>, id: number) {
    const {addToWishlist: addToWishlistAction} = wishlistSlice.actions;
    dispatch(addToWishlistAction(id));
}