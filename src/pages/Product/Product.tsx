import { useState } from "react";

import classes from "./Product.module.scss";

import Roadmap from "@/components/Roadmap/Roadmap";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import { ProductInfo } from "@/modules/ProductInfo";
import ProductList from "@/components/ProductList/ProductList";
import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";

import gamepadImage01 from "@/assets/products/gamepad/gamepad-image-01.png";
import gamepadImage02 from "@/assets/products/gamepad/gamepad-image-02.png";
import gamepadImage03 from "@/assets/products/gamepad/gamepad-image-03.png";
import gamepadImage04 from "@/assets/products/gamepad/gamepad-image-04.png";
import gamepadImage05 from "@/assets/products/gamepad/gamepad-image-05.png";
import gamepad from "@/assets/products/gamepad.png";
import keyboard from "@/assets/products/keyboard.png";
import monitor from "@/assets/products/gaming-monitor.png";
import cooler from "@/assets/products/cooler.png";


export default function Product() {
    const links = [
        {name: "Home", url: "/"},
        {name: "Gaming", url: "/gaming"},
        {name: "Havic HV G-92 Gamepad", url: "/product"},
    ]
    const productImages = [
        gamepadImage01,
        gamepadImage02,
        gamepadImage03,
        gamepadImage04,
        gamepadImage05,
    ]
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
    ]);

    return (
        <main>
            <Roadmap links={links} />
            <section className={classes["product-section"]}>
                <div className={classes["product-container"]}>
                    <ProductGallery images={productImages} />
                    <ProductInfo />
                </div>
                <div className={classes["product-list-container"]}>
                    <SectionHeader subtitle="Related item" />
                    <ProductList products={products} />
                </div>
            </section>
        </main>
    )
}