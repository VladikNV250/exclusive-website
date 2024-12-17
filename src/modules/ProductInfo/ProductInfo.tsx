import AddToWishlist from "./components/AddToWishlist/AddToWishlist";
import BuyNow from "./components/BuyNow/BuyNow";
import ProductColors from "./components/ProductColors/ProductColors";
import ProductDecription from "./components/ProductDescription/ProductDecription";
import ProductPrice from "./components/ProductPrice/ProductPrice";
import ProductQuantity from "./components/ProductQuantity/ProductQuantity";
import ProductReviews from "./components/ProductReviews/ProductReviews";
import ProductSize from "./components/ProductSize/ProductSize";
import ProductTitle from "./components/ProductTitle/ProductTitle";
import SpecialsList from "./components/SpecialsList/SpecialsList";
import classes from "./ProductInfo.module.scss";
import { Product } from "./types/types";

export function ProductInfo() {
    const product: Product = {
        title: "Havic HV G-92 Gamepad",
        reviews: {
            point: 4.0,
            numberOfReviews: 150,
            isInStock: true,
        },
        price: 192,
        description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        colors: ["#ddd", "black"],
        sizes: ["XS", "S", "M", "X", "XL"],
        quantity: 2,
    }

    return (
        <div className={classes["product-info"]}>
            <ProductTitle title={product.title} />
            <ProductReviews 
                point={product.reviews.point} 
                numberOfReviews={product.reviews.numberOfReviews}
                isInStock={product.reviews.isInStock}    
            />
            <ProductPrice price={product.price} />
            <ProductDecription 
                description={product.description} 
            />
            <div className={classes["horizontal-line"]} />
            <ProductColors colors={product.colors} />
            <ProductSize sizes={product.sizes} />
            <div className={classes["buttons-container"]}>
                <ProductQuantity />
                <BuyNow />
                <AddToWishlist />
            </div>
            <SpecialsList />
        </div>
    )
}