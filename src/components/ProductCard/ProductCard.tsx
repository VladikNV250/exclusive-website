import classes from "./ProductCard.module.scss";
import Heading from "@/UI/headers/Heading/Heading";
import { ProductProps } from "./types/types";
import Cart from "@/assets/icons/cart.svg";
import { defaultOptions } from "./constants/defaultOptions";
import { ProductTag } from "./UI/ProductTag/ProductTag";
import getDiscount from "./helpers/getDiscount";
import { ButtonAdditional } from "./UI/ButtonAdditional/ButtonAdditional";
import Heart from "@/assets/icons/heart-small.svg";
import Trash from "@/assets/icons/trash.svg";
import quickViewIcon from "@/assets/icons/quick-view.svg";
import { formatPrice } from "./helpers/formatPrice";
import { RadioColor } from "./UI/RadioColor/RadioColor";
import { ProductReviewStar } from "./UI/ProductReviewStar/ProductReviewStar";


export function ProductCard({image, name, price, oldPrice, options = defaultOptions}: ProductProps) {
    const itemButtonClass = options.cartIcon ? classes["item-button__cart"] : classes["item-button"]

    return (
        <div className={classes["product-card"]}>
            <div className={classes["item-container"]}>
                <div className={classes["item-background"]}>
                    <img src={image} className={classes["background-image"]} />
                </div>
                <div className={classes["item-content__left"]}>
                    {options.tagNew && <ProductTag type="new"/>}
                    {options.tagDiscount && 
                    <ProductTag type="discount">
                        {getDiscount(price, oldPrice)}
                    </ProductTag>}
                </div>
                <div className={classes["item-content__right"]}>
                    {options.wishlist &&
                    <ButtonAdditional 
                        Icon={Heart} 
                        name="heart" 
                    />}
                    {options.trash &&
                    <ButtonAdditional 
                        Icon={Trash} 
                        name="trash" 
                    />}
                    {options.quickView &&
                    <ButtonAdditional 
                        Icon={quickViewIcon} 
                        name="view" 
                    />}
                </div>
                <button className={itemButtonClass}>
                    {options.cartIcon && 
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
        // <ProductCardUI 
        //     image={image}
        //     name={name}
        //     price={price}
        //     oldPrice={oldPrice}
        //     children={getProductChildren(name, price, oldPrice, options)}
        // />
    )
}