import classes from "./WishlistItems.module.scss";

import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import ProductList from "@/components/ProductList/ProductList";

import { useAppSelector } from "@/hooks/redux";
import selectByIdProducts from "@/store/selectors/selectByIdProducts";


export default function WishlistItems() {
    const {productIDs} = useAppSelector(state => state.wishlistReducer);
    const products = useAppSelector(state => selectByIdProducts(state, productIDs));
    
    return (
        <section className={classes["wishlist-section"]}>
            <div className={classes["wishlist-container"]}>
                <header className={classes["wishlist-header"]}>
                    <h5 className={classes["wishlist-title"]}>
                        Wishlist 
                    </h5>
                    <ButtonOutlined>
                        Move All To Cart
                    </ButtonOutlined>
                </header>
                {products.length > 0 
                ? <ProductList products={products} mode="all-products"/>
                : <h4 className={classes["wishlist-title"]}>Nothing in wishlist..</h4>}
            </div>
        </section>
    )
}