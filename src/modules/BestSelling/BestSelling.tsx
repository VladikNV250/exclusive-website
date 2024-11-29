import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import classes from "./BestSelling.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import ProductList from "@/components/ProductList/ProductList";
import { useState } from "react";
import { ProductProps } from "@/components/ProductCard/types/types";
import coat from "@/assets/products/coat.png";
import bookself from "@/assets/products/bookself.png";
import bag from "@/assets/products/bag.png";
import cooler from "@/assets/products/cooler.png";

export default function BestSelling() {
    const [products] = useState<ProductProps[]>([
        {
            image: coat, 
            name: "The north coat",
            price: 260, 
            oldPrice: 360,
            options: {
                wishlist: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        {
            image: bag, 
            name: "Gucci duffle bag",
            price: 960, 
            oldPrice: 1160,
            options: {
                wishlist: true,
                quickView: true,
                rating: 4.5,
                numberOfReviews: 75,
            }
        },
        {
            image: cooler, 
            name: "RGB liquid CPU Cooler",
            price: 160, 
            oldPrice: 170,
            options: {
                wishlist: true,
                quickView: true,
                rating: 4.5,
                numberOfReviews: 65,
            }
        },
        {
            image: bookself, 
            name: "Small BookSelf",
            price: 360, 
            options: {
                wishlist: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
    ]);

    return (
        <section className={classes["best-selling"]}>
            <div className={classes["best-selling--container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle="This Month" title="Best Selling Products" />
                    <ButtonLarge>
                        View All
                    </ButtonLarge>
                </div>
                <ProductList products={products}/>
            </div>
        </section>
    )
}