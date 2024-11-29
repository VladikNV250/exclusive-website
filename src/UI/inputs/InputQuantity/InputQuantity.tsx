import classes from "./InputQuantity.module.scss";
import Chevron from "@/assets/icons/drop-down.svg";

interface Props {
    quantity?: number
}

export default function InputQuantity({quantity = 1}: Props) {
    const numberFormat = new Intl.NumberFormat("en", {
        minimumIntegerDigits: 2,
    })

    return (
        <div className={classes["input-container"]}>
            <input 
                type="number" 
                className={classes["input-quantity"]}    
                defaultValue={numberFormat.format(quantity)}
            />
            <div className={classes["spin-buttons--container"]}>
                <button className={classes["increment"]}>
                    <Chevron width={16} height={16} />
                </button>
                <button className={classes["decrement"]}>
                    <Chevron width={16} height={16} />
                </button>
            </div>
        </div>
    )
}