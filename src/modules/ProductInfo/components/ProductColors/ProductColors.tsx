import { RadioColor } from "@/components/ProductCard/components/RadioColor/RadioColor";
import classes from "./ProductColors.module.scss";

interface Props {
    colors: string[]
}

export default function ProductColors({colors}: Props) {
    if (colors.length > 1) return (
        <div className={classes["colors-container"]}>
            <h4 className={classes["colors-title"]}>Colors:</h4>
            <RadioColor 
                colors={colors} 
                name="product-colors"
            />
        </div>
    )
}