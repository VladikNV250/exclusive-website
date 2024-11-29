import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import classes from "./WishlistItems.module.scss";
import ProductList from "@/components/ProductList/ProductList";
import { useState } from "react";
import bag from "@/assets/products/bag.png";
import cooler from "@/assets/products/cooler.png";
import gamepad from "@/assets/products/gamepad2.png";
import jacket from "@/assets/products/jacket.png";
import { ProductProps } from "@/components/ProductCard/types/types";

export default function WishlistItems() {
    const [products] = useState<ProductProps[]>([
        {
            image: bag, 
            name: "Gucci duffle bag",
            price: 960, 
            oldPrice: 1160,
            options: {
                tagDiscount: true,
                trash: true,
            }
        },
        {
            image: cooler, 
            name: "RGB liquid CPU Cooler",
            price: 1960, 
            options: {
                trash: true,
            }
        },
        {
            image: gamepad, 
            name: "GP11 Shooter USB Gamepad",
            price: 550, 
            options: {
                trash: true,
            }
        },
        {
            image: jacket, 
            name: "Quilted Satin Jacket",
            price: 750, 
            options: {
                trash: true,
            }
        },
    ]);
    
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
                ? <ProductList products={products} />
                : <h4 className={classes["wishlist-title"]}>Nothing in wishlist..</h4>}
            </div>
        </section>
    )
}