import classes from "./Sales.module.scss";
import { useState } from "react";
import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import { Timer } from "@/components/Timer/Timer";
import ButtonNavigation from "@/UI/buttons/ButtonNavigation/ButtonNavigation";
import ProductList from "@/components/ProductList/ProductList";
import gamepad from "@/assets/products/gamepad.png";
import chair from "@/assets/products/chair.png";
import monitor from "@/assets/products/gaming-monitor.png";
import keyboard from "@/assets/products/keyboard.png";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";


export default function Sales() {
    const releaseDate = new Date(2024, 11, 29);
    const [products] = useState([
        {
            image: gamepad, 
            name: "HAVIT HV-G92 Gamepad",
            price: 120, 
            oldPrice: 200,
            options: {
                tagDiscount: true,
                wishlist: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 88,
            }
        },
        {
            image: keyboard, 
            name: "AK-900 Wired Keyboard",
            price: 960, 
            oldPrice: 1479,
            options: {
                tagDiscount: true,
                wishlist: true,
                quickView: true,
                rating: 4.0,
                numberOfReviews: 75,
            }
        },
        {
            image: monitor, 
            name: "IPS LCD Gaming Monitor",
            price: 370, 
            oldPrice: 530,
            options: {
                tagDiscount: true,
                wishlist: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 99,
            }
        },
        {
            image: chair, 
            name: "S-Series Comfort Chair ",
            price: 375, 
            oldPrice: 500,
            options: {
                tagDiscount: true,
                wishlist: true,
                quickView: true,
                rating: 4.5,
                numberOfReviews: 99,
            }
        },
        {
            image: gamepad, 
            name: "HAVIT HV-G92 Gamepad",
            price: 120, 
            oldPrice: 160,
            options: {
                tagDiscount: true,
                wishlist: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 88,
            }
        },
        {
            image: keyboard, 
            name: "AK-900 Wired Keyboard",
            price: 960, 
            oldPrice: 1160,
            options: {
                tagDiscount: true,
                wishlist: true,
                quickView: true,
                rating: 4.0,
                numberOfReviews: 75,
            }
        },
        {
            image: monitor, 
            name: "IPS LCD Gaming Monitor",
            price: 370, 
            oldPrice: 400,
            options: {
                tagDiscount: true,
                wishlist: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 99,
            }
        },
        {
            image: chair, 
            name: "S-Series Comfort Chair ",
            price: 375, 
            oldPrice: 400,
            options: {
                tagDiscount: true,
                wishlist: true,
                quickView: true,
                rating: 4.5,
                numberOfReviews: 99,
            }
        },
    ]);

    return (
        <section className={classes["sales"]}>
            <div className={classes["sales-container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle="Today's" title="Flash Sales" />
                    <div className={classes["timer-wrapper"]}>
                        <Timer date={releaseDate} type="text"/>
                    </div>
                    <div className={classes["button-container"]}>
                        <ButtonNavigation direction="left" />
                        <ButtonNavigation direction="right" />
                    </div>
                </div>
                <ProductList products={products} />
                <ButtonLarge className={classes["button-all"]}>
                    View All Products
                </ButtonLarge>
            </div>
        </section>
    )
}