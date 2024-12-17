import WishlistItems from "@/pages/wishlist/components/WishlistItems/WishlistItems";
import classes from "./Wishlist.module.scss";
import JustForYou from "@/pages/wishlist/components/ForUserItems/ForUserItems";

export default function Wishlist() {
    return (
        <main>
            <WishlistItems />
            <JustForYou />
        </main>
    )
}