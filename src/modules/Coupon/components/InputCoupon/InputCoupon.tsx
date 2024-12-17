import classes from "./InputCoupon.module.scss";

export default function InputCoupon() {
    return (
        <input
            type="text"
            placeholder="Coupon Code"
            className={classes["input"]}
        />
    )
}