import { wishlistSlice } from "@/store/reducers/WishlistSlice";
import { RootState } from "@/store/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

export default function removeFromWishlist(dispatch: ThunkDispatch<RootState, undefined, UnknownAction>, id: number) {
    const {removeFromWishlist: removeFromWishlistAction} = wishlistSlice.actions;
    dispatch(removeFromWishlistAction(id));
}