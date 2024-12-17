import classes from "./AddToWishlist.module.scss";
import Heart from "@/assets/icons/heart-small.svg";

export default function AddToWishlist() {
    return (
        <button className={classes["button"]}>
            <Heart width={32} height={32} className={classes["icon"]} />
        </button>
    )
}