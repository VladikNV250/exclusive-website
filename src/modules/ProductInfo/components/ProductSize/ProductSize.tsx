import { useState } from "react";
import { Size } from "../../types/types";
import classes from "./ProductSize.module.scss";


interface Props {
    sizes: Size[];
    currentSize?: Size;
}

export default function ProductSize({sizes}: Props) {
    const [currentSize, setCurrentSize] = useState<Size>("M")
    if (!sizes.includes(currentSize)) setCurrentSize(sizes[0]);

    if (sizes.length > 1) return (
        <div className={classes["sizes-container"]}>
            <h4 className={classes["sizes-title"]}>Size:</h4>
            <div className={classes["sizes-buttons-container"]}>
                {sizes.map((size, index) => {
                    const buttonClass = size === currentSize ? "sizes-button__current" : "sizes-button"
                    return (
                        <button 
                            key={index}
                            className={classes[buttonClass]}
                            onClick={() => setCurrentSize(size)}
                        >
                            {size}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}