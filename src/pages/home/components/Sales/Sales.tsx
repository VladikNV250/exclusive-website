import classes from "./Sales.module.scss";

import { useState } from "react";
import { ListMode } from "../../../../components/ProductList/types/types";

import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import { Timer } from "@/components/Timer/Timer";
import ButtonNavigation from "@/UI/buttons/ButtonNavigation/ButtonNavigation";
import ProductList from "@/components/ProductList/ProductList";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";


import selectFilteredProducts from "@/store/selectors/selectFilteredProducts";
import { useAppSelector } from "@/hooks/redux";



export default function Sales() {
    const releaseDate = new Date(2024, 11, 29);
    const products = useAppSelector(state => selectFilteredProducts(state, "flash-sales"))

    const [translate, setTranslate] = useState<number>(0);
    const [mode, setMode] = useState<ListMode>("slider")

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
        <section className={classes["sales"]}>
            <div className={classes["sales-container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle="Today's" title="Flash Sales" />
                    <div className={classes["timer-wrapper"]}>
                        <Timer date={releaseDate} type="text"/>
                    </div>
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
                    className={classes["products-container"]} 
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