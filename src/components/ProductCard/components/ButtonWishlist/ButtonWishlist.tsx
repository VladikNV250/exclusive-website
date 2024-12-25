import { useRef } from "react";
import classes from "./ButtonWishlist.module.scss";
import ButtonCircle from "@/UI/buttons/ButtonCircle/ButtonCircle";
import Heart from "@/assets/icons/heart-small.svg";
import Trash from "@/assets/icons/trash.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { wishlistSlice } from "@/store/reducers/WishlistSlice";

interface Props {
    id: number,
}

export default function ButtonWishlist({id}: Props) {
    const {productIDs} = useAppSelector(state => state.wishlistReducer);
    const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;
    const dispatch = useAppDispatch();
    
    const inWishlist = productIDs.includes(id);

    function handleClick() {
        if (inWishlist) 
            dispatch(removeFromWishlist(id));
        else 
            dispatch(addToWishlist(id));
    }

    return (
        <ButtonCircle onClick={handleClick}>
            <div className={classes["icons-container"]}>
                <Heart 
                    width={24} height={24} 
                    className={inWishlist ? classes["heart__removed"] : classes["heart"]} 
                />
                <Trash 
                    width={24} height={24} 
                    className={inWishlist ? classes["trash"] : classes["trash__removed"]} 
                />
            </div>
        </ButtonCircle>
    )
}