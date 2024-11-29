import Heading from "@/UI/headers/Heading/Heading";
import classes from "./ProductCardUI.module.scss";
import Cart from "@/assets/icons/cart.svg";
import { cardChildren } from "@/components/ProductCard/types/types";
import React from "react";

interface Props {
    image: string,
    price: number,
    oldPrice?: number,
    name: string,
    cart?: boolean,
    children?: cardChildren
}

export default function ProductCardUI({image, price, oldPrice, name, cart = false, children}: Props) {
    const itemButtonClass = cart ? classes["item-button__cart"] : classes["item-button"]
    const numberFormat = Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    })

    return (
        <div className={classes["product-card"]}>
            <div className={classes["item-container"]}>
                <div className={classes["item-background"]}>
                    <img src={image} className={classes["background-image"]} />
                </div>
                <div className={classes["item-content__left"]}>
                    {children?.left.map((child, key) => 
                        <React.Fragment key={key}>
                            {child}
                        </React.Fragment>
                    )}
                </div>
                <div className={classes["item-content__right"]}>
                    {children?.right.map((child, key) => (
                        <React.Fragment key={key}>
                            {child}
                        </React.Fragment>
                    ))}
                </div>
                <button className={itemButtonClass}>
                    {cart 
                    ? <Cart width={24} height={24} /> 
                    : null
                    }
                    Add To Cart
                </button>
            </div>
            <div className={classes["product-body"]}>
                <Heading level="h6" className={classes["product-name"]}>
                    {name}
                </Heading>
                <div className={classes["product-content"]}>
                    <Heading level="h6" className={classes["product-price"]}>
                        {numberFormat.format(price)} 
                    </Heading>
                    {oldPrice 
                    ?   <Heading level="h6" className={classes["product-price__old"]}>
                            {numberFormat.format(oldPrice)}
                        </Heading>
                    : null}
                    {children?.bottom.map((child, key) => (
                        <React.Fragment key={key}>
                            {child}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}