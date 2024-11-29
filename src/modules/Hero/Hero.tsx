import { useState } from "react";
import classes from "./Hero.module.scss";
import { Link } from "react-router-dom";
import Slider from "@/components/Slider/Slider";
import CategoriesSidebar from "@/components/CategoriesSidebar/CategoriesSidebar";

export default function Hero() {
    return (
        <section className={classes["hero"]}>
            <div className={classes["hero-container"]}>
                <CategoriesSidebar className={classes["hero-sidebar"]} />
                <Slider />
            </div>
        </section>
    )
}