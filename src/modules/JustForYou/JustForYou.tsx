import ProductList from "@/components/ProductList/ProductList";
import classes from "./JustForYou.module.scss";
import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import { useState } from "react";
import { ProductProps } from "@/components/ProductCard/types/types";
import notebook from "@/assets/products/notebook.png";
import gamingMonitor from "@/assets/products/gaming-monitor.png";
import gamepad from "@/assets/products/gamepad.png";
import keyboard from "@/assets/products/keyboard.png";
import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";

export default function JustForYou() {
    const [products] = useState<ProductProps[]>([
        {
            image: notebook, 
            name: "ASUS FHD Gaming Laptop",
            price: 960, 
            oldPrice: 1160,
            options: {
                tagDiscount: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        {
            image: gamingMonitor, 
            name: "IPS LCD Gaming Monitor",
            price: 1160, 
            options: {
                quickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        {
            image: gamepad, 
            name: "HAVIT HV-G92 Gamepad",
            price: 560, 
            options: {
                tagNew: true,
                quickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        {
            image: keyboard, 
            name: "AK-900 Wired Keyboard",
            price: 200, 
            options: {
                quickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
    ]);

    return (
        <section className={classes["just-for-you--section"]}>
            <div className={classes["just-for-you--container"]}>
                <header className={classes["just-for-you--header"]}>
                    <SectionHeader subtitle="Just For You" />
                    <ButtonOutlined>
                        See All
                    </ButtonOutlined>
                </header> 
                <ProductList products={products} />
            </div>
        </section>
    )
}