import classes from "./ProductCard.module.scss";

import Heading from "@/UI/headers/Heading/Heading";
import { ProductTag } from "./components/ProductTag/ProductTag";
import ButtonWishlist from "./components/ButtonWishlist/ButtonWishlist";
import ButtonQuickView from "./components/ButtonQuickView/ButtonQuickView";
import { RadioColor } from "./components/RadioColor/RadioColor";
import { ProductReviewStar } from "./components/ProductReviewStar/ProductReviewStar";

import Cart from "@/assets/icons/cart.svg";

import { IProduct } from "@/models/IProduct";
import { defaultOptions } from "./constants/defaultOptions";
import getDiscount from "./helpers/getDiscount";
import formatPrice from "@/helpers/formatPrice";


export function ProductCard({id, image, name, price, oldPrice, options = defaultOptions}: IProduct) {
    const itemButtonClass = options.haveCartIcon ? classes["item-button__cart"] : classes["item-button"];

    return (
        <div className={classes["product-card"]}>
            <div className={classes["item-container"]}>
                <div className={classes["item-background"]}>
                    <img src={image} className={classes["background-image"]} />
                </div>
                <div className={classes["item-content__left"]}>
                    {options.isNew && <ProductTag type="new"/>}
                    {oldPrice && 
                    <ProductTag type="discount">
                        {getDiscount(price, oldPrice)}
                    </ProductTag>}
                </div>
                <div className={classes["item-content__right"]}>
                    <ButtonWishlist id={id} />
                    {options.haveQuickView &&
                    <ButtonQuickView />}
                </div>
                <button className={itemButtonClass}>
                    {options.haveCartIcon && 
                    <Cart width={24} height={24} />}
                    Add To Cart
                </button>
            </div>
            <div className={classes["product-body"]}>
                <Heading level="h6" className={classes["product-name"]}>
                    {name}
                </Heading>
                <div className={classes["product-content"]}>
                    <Heading level="h6" className={classes["product-price"]}>
                        {formatPrice(price)} 
                    </Heading>
                    {oldPrice && 
                    <Heading level="h6" className={classes["product-price__old"]}>
                        {formatPrice(oldPrice)}
                    </Heading>}
                    {options.rating > 0 &&
                    <ProductReviewStar 
                        point={options.rating} 
                        numberOfReviews={options.numberOfReviews} 
                    />}
                    {options.availableColors &&
                    <RadioColor 
                        colors={options.availableColors} 
                        name={name} 
                    />}
                </div>
            </div>
        </div>
    )
}