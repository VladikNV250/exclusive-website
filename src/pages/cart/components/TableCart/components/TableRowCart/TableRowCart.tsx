import InputQuantity from "@/UI/inputs/InputQuantity/InputQuantity";
import classes from "./TableRowCart.module.scss";

interface Props {
    product: {
        image: string,
        name: string,
        price: number,
        quantity: number,
    }
}

export default function TableRowCart({product}: Props) {
    const { image, name, price, quantity } = product;
    const numberFormat = Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    })

    return (
        <tr className={classes["table-row"]}>
            <th className={classes["table-item"]}>
                <div className={classes["table-ceil--name"]}>
                    <img src={image} alt={name} className={classes["item-image"]}/>
                    {name}
                </div>
            </th>
            <th className={classes["table-item"]}>
                {numberFormat.format(price)}
            </th>
            <th className={classes["table-item"]}>
                <InputQuantity quantity={quantity} />
            </th>
            <th className={classes["table-item"]}>
                {numberFormat.format(price * quantity)}
            </th>
        </tr>
    )
}