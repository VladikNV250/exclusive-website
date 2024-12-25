import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import classes from "./Explore.module.scss";
import ButtonNavigation from "@/UI/buttons/ButtonNavigation/ButtonNavigation";
import ProductList from "@/components/ProductList/ProductList";
import { useState } from "react";

import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import { ListMode } from "../../../../components/ProductList/types/types";
import selectFilteredProducts from "@/store/selectors/selectFilteredProducts";
import { useAppSelector } from "@/hooks/redux";

export default function Explore() {
    const products = useAppSelector(state => selectFilteredProducts(state, "explore"))

    const [translate, setTranslate] = useState(0);
    const [mode, setMode] = useState<ListMode>("all-products")

    const slideLeft = () => { 
        if (translate < 0)
            setTranslate(translate => translate + 1200)
    }
    const slideRight = () => {
        if (translate > ((products.length / 4) - 1) * -1200)
            setTranslate(translate => translate - 1200);
    }

    const changeMode = () => { 
        setTranslate(0);
        if (mode === "all-products") setMode("slider");
        else setMode("all-products");
    }

    return (
        <section className={classes["explore"]}>
            <div className={classes["explore-container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle="Our Products" title="Explore Our Products" />
                    <div className={classes["button-container"]}>
                        <ButtonNavigation 
                            direction="left" 
                            onClick={slideLeft} 
                            disabled={mode === "all-products"}
                        />
                        <ButtonNavigation 
                            direction="right" 
                            onClick={slideRight}
                            disabled={mode === "all-products"}
                        />
                    </div>
                </div>
                <div 
                    className={mode === "slider" ? classes["products-slider"]: classes["products-container"]} 
                    style={{transform: `translateX(${translate}px)`}}
                >
                    <ProductList 
                        products={products} 
                        mode={mode}
                    />
                </div>
                <ButtonLarge 
                    className={classes["button-all"]}
                    onClick={changeMode}
                >
                    {mode === "all-products"
                    ? "Collapse Products"
                    : "View All Products"
                    }
                </ButtonLarge>
            </div>
        </section>
    )
}