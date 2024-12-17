import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import classes from "./TableCart.module.scss";
import { useState } from "react";
import TableRowCart from "@/pages/cart/components/TableCart/components/TableRowCart/TableRowCart";
import TableHeadCart from "@/pages/cart/components/TableCart/components/TableHeadCart/TableHeadCart";
import monitor from "@/assets/products/gaming-monitor.png";
import gamepad from "@/assets/products/gamepad.png";
import ToShop from "./components/ToShop/ToShop";
import CleanCartButton from "./components/CleanCartButton/CleanCartButton";

export function TableCart() {
    const headers = ["Product", "Price", "Quantity", "Subtotal"]
    const [products] = useState([
        {
            image: monitor, 
            name: "IPS LCD Gaming Monitor",
            price: 370, 
            quantity: 1,
        },
        {
            image: gamepad, 
            name: "HAVIT HV-G92 Gamepad",
            price: 120, 
            quantity: 2,
        },
    ])
    
    return (
        <section className={classes["table-section"]}>
            <div className={classes["table-container"]}>
                <table className={classes["table"]}>
                    <TableHeadCart headers={headers} />
                    <tbody>
                    {products.map((product, key) => 
                        <TableRowCart product={product} key={key} />
                    )}
                    </tbody>
                </table>
                <div className={classes["buttons-container"]}>
                    <ToShop />
                    <CleanCartButton />
                </div>
            </div>

        </section>
    )
}