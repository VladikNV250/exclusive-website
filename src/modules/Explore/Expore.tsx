import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import classes from "./Explore.module.scss";
import ButtonNavigation from "@/UI/buttons/ButtonNavigation/ButtonNavigation";
import ProductList from "@/components/ProductList/ProductList";
import { useState } from "react";
import { ProductProps } from "@/components/ProductCard/types/types";
import dogfood from "@/assets/products/dog-food.png";
import notebook from "@/assets/products/notebook.png";
import jacket from "@/assets/products/jacket.png";
import shoes from "@/assets/products/shoes.png";
import gamepad from "@/assets/products/gamepad2.png";
import curology from "@/assets/products/curology.png";
import car from "@/assets/products/car.png";
import camera from "@/assets/products/camera.png";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";

export default function Explore() {
    const [products1] = useState<ProductProps[]>([
        {
            image: dogfood, 
            name: "Breed Dry Dog Food",
            price: 100, 
            options: {
                wishlist: true,
                quickView: true,
                rating: 3.0,
                numberOfReviews: 35,
            }
        },
        {
            image: camera, 
            name: "CANON EOS DSLR Camera",
            price: 360, 
            options: {
                wishlist: true,
                quickView: true,
                rating: 4.0,
                numberOfReviews: 95,
            }
        },
        {
            image: notebook, 
            name: "ASUS FHD Gaming Laptop",
            price: 700, 
            options: {
                wishlist: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 325,
            }
        },
        {
            image: curology, 
            name: "Curology Product Set ",
            price: 500, 
            options: {
                wishlist: true,
                quickView: true,
                rating: 4.0,
                numberOfReviews: 145,
            }
        },
    ]);
    const [products2] = useState<ProductProps[]>([
        {
            image: car, 
            name: "Kids Electric Car",
            price: 960, 
            options: {
                tagNew: true,
                wishlist: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 65,
                availableColors: ["#FB1314", "#DB4444"],
            }
        },
        {
            image: shoes, 
            name: "Jr. Zoom Soccer Cleats",
            price: 1160, 
            options: {
                wishlist: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 35,
                availableColors: ["#EEFF61", "#DB4444"],
            }
        },
        {
            image: gamepad, 
            name: "GP11 Shooter USB Gamepad",
            price: 660, 
            options: {
                tagNew: true,
                wishlist: true,
                quickView: true,
                rating: 4.5,
                numberOfReviews: 55,
                availableColors: ["#000", "#DB4444"],
            }
        },
        {
            image: jacket, 
            name: "Quilted Satin Jacket",
            price: 660, 
            options: {
                wishlist: true,
                quickView: true,
                rating: 4.5,
                numberOfReviews: 65,
                availableColors: ["#184A48", "#DB4444"],
            }
        },
    ]);
    
    return (
        <section className={classes["explore"]}>
            <div className={classes["explore-container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle="Our Products" title="Explore Our Products" />
                    <div className={classes["button-container"]}>
                        <ButtonNavigation direction="left" />
                        <ButtonNavigation direction="right" />
                    </div>
                </div>
                <div className={classes["product-container"]}>
                    <ProductList products={products1}/>
                    <ProductList products={products2}/>
                </div>
                <ButtonLarge className={classes["button-all"]}>
                    View All Products
                </ButtonLarge>
            </div>
        </section>
    )
}