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
        <tr>
            <th>
                <img src={image} alt={name} />
                {name}
            </th>
            <th>
                {numberFormat.format(price)}
            </th>
            <th>
                <InputQuantity quantity={quantity} />
            </th>
            <th>
                {numberFormat.format(price * quantity)}
            </th>
        </tr>
    )
}