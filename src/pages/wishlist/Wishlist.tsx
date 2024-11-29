import WishlistItems from "@/modules/WishlistItems/WishlistItems";
import classes from "./Wishlist.module.scss";
import JustForYou from "@/modules/JustForYou/JustForYou";

export default function Wishlist() {
    return (
        <main>
            <WishlistItems />
            <JustForYou />
        </main>
    )
}