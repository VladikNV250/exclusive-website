import CategoryCard from "@/UI/cards/CategoryCard/CategoryCard";
import classes from "./CategoryCarousel.module.scss";
import { useState } from "react";
import Phone from "@/assets/category-icon/cell-phone.svg";
import Camera from "@/assets/category-icon/camera.svg";
import Computer from "@/assets/category-icon/computer.svg";
import Gamepad from "@/assets/category-icon/gamepad.svg";
import Headphone from "@/assets/category-icon/headphone.svg";
import SmartWatch from "@/assets/category-icon/smart-watch.svg";
import { Link } from "react-router-dom";

export default function CategoryCarousel() {
    const [categories] = useState([
        {Icon: Phone,      name: "Phones",      link: "/electronics/#phones"},
        {Icon: Computer,   name: "Computers",   link: "/electronics/#computers"},
        {Icon: SmartWatch, name: "Smart Watch", link: "/electronics/#watchs"},
        {Icon: Camera,     name: "Cameras",     link: "/electronics/#cameras"},
        {Icon: Headphone,  name: "Headphones",  link: "/electronics/#headphones"},
        {Icon: Gamepad,    name: "Gaming",      link: "/electronics/#gaming"},
    ])

    return (
        <div className={classes["category-carousel"]}>
            {categories.map(({Icon, name, link}, index) => 
                <Link key={index} to={link} className={classes["category-link"]}>
                    <CategoryCard Icon={Icon}>
                        {name}
                    </CategoryCard>
                </Link>
            )}
        </div>
    )
}