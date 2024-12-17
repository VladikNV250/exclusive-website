import classes from "./CartTotal.module.scss";
import CartHeading from "./components/CartHeading/CartHeading";
import CartTotalItem from "./components/CartTotalItem/CartTotalItem";
import ToCheckout from "./components/ToCheckout/ToCheckout";

export function CartTotal() {
    return (
        <div className={classes["cart-total"]}>
            <CartHeading />
            <div className={classes["cart-container"]}>
                <CartTotalItem order="Subtotal:" summary={1750} />
                <CartTotalItem order="Shipping:" summary={0} />
                <CartTotalItem order="Total:" summary={1750} />
            </div>
            <ToCheckout />
        </div>
    )
}