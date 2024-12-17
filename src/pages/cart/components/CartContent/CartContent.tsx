import { Coupon } from "@/modules/Coupon";
import classes from "./CartContent.module.scss";
import { CartTotal } from "@/modules/CartTotal";

export default function CartContent() {
    return (
        <section className={classes["cart-section"]}>
            <div className={classes["cart-container"]}>
                <Coupon />
                <CartTotal />
            </div>
        </section>
    )
}