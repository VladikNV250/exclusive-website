import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import classes from "./Category.module.scss";
import ButtonNavigation from "@/UI/buttons/ButtonNavigation/ButtonNavigation";
import { CategoryCarousel } from "@/components/CategoryCarousel/CategoryCarousel";
import { useState } from "react";
import Phone from "@/assets/category-icon/cell-phone.svg";
import Camera from "@/assets/category-icon/camera.svg";
import Computer from "@/assets/category-icon/computer.svg";
import Gamepad from "@/assets/category-icon/gamepad.svg";
import Headphone from "@/assets/category-icon/headphone.svg";
import SmartWatch from "@/assets/category-icon/smart-watch.svg";


export default function Category() {
    const [currentGroupID, setCurrentGroupId] = useState(0);
    const groupCategories = [
        [
            {Icon: Phone,      name: "Phones",      link: "/electronics/#phones"},
            {Icon: Computer,   name: "Computers",   link: "/electronics/#computers"},
            {Icon: SmartWatch, name: "Smart Watch", link: "/electronics/#watchs"},
            {Icon: Camera,     name: "Cameras",     link: "/electronics/#cameras"},
            {Icon: Headphone,  name: "Headphones",  link: "/electronics/#headphones"},
            {Icon: Gamepad,    name: "Gaming",      link: "/electronics/#gaming"},
        ],
        [
            {Icon: Camera,     name: "Clothes",     link: "/woman/#clothes"},
            {Icon: Phone,      name: "Shoes",      link: "/woman/#shoes"},
            {Icon: Gamepad,    name: "Backpacks and Bags",      link: "/woman/#backpacks"},
            {Icon: Computer,   name: "Accesories",   link: "/woman/#accesories"},
            {Icon: SmartWatch, name: "Home & Lifestyle", link: "/home&lifestyle"},
            {Icon: Headphone,  name: "Medicine",  link: "/medicine"},
        ],
        [
            {Icon: Phone,      name: "Sports",      link: "/sport&outdoor"},
            {Icon: SmartWatch, name: "Baby's & Toys", link: "/babys&toys"},
            {Icon: Computer,   name: "Groceries",   link: "/groceries&pets"},
            {Icon: Camera,     name: "Health",     link: "/health&beauty"},
            {Icon: Headphone,  name: "Beauty",  link: "/health&beauty"},
            {Icon: Gamepad,    name: "Pets",      link: "/groceries&pets"},
        ],
    ];
    
    const slideRight = () => {
        if (currentGroupID < groupCategories.length - 1)
            setCurrentGroupId(currentGroupID => currentGroupID + 1);
        else
            setCurrentGroupId(0);
    }
    
    const slideLeft = () => {
        if (currentGroupID > 0)
            setCurrentGroupId(currentGroupID => currentGroupID - 1);
        else
            setCurrentGroupId(groupCategories.length - 1);
    }
    
    return (
        <section className={classes["category-section"]}>
            <div className={classes["category-container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle="Categories" title="Browse By Category" />
                    <div className={classes["button-container"]}>
                        <ButtonNavigation 
                            direction="left"
                            onClick={slideLeft} 
                        />
                        <ButtonNavigation 
                            direction="right" 
                            onClick={slideRight}
                        />
                    </div>
                </div>
                <div className={classes["carousel"]}>
                    {groupCategories.map((categories, index) => 
                        <CategoryCarousel
                            categories={categories}
                            currentGroupID={currentGroupID}
                            groupID={index}
                            key={index}
                        />            
                    )}
                </div>
            </div>
        </section>
    )
}