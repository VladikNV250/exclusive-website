import classes from "./InputProductQuantity.module.scss";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";

export default function InputProductQuantity() {
    return (
        <div className={classes["input-container"]}>
            <button className={classes["input-button"]}>
                <Minus width={24} height={24} />
            </button>
            <input 
                type="number"
                className={classes["input-quantity"]}
                defaultValue={1} 
            />
            <button className={classes["input-button"]}>
                <Plus width={24} height={24} />
            </button>
        </div>
    )
}