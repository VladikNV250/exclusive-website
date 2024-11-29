import { useState } from "react";
import classes from "./CategoriesSidebar.module.scss";
import { Link } from "react-router-dom";
import Chevron from "@/assets/icons/drop-down.svg"

export default function CategoriesSidebar({className = ""}: {className: string}) {
    const [dropdownMenus] = useState([
        {
            categoriesName: "Women's Fashion",
            link: "/woman",
            subcategories: [
                {name: "Clothes", link: "/woman/clothes"},
                {name: "Shoes", link: "/woman/shoes"},
                {name: "Backpacks and Bags", link: "/woman/clothes"},
                {name: "Accessories", link: "/woman/accessories"},
            ]
        },
        {
            categoriesName: "Men's Fashion",
            link: "/man",
            subcategories: [
                {name: "Clothes", link: "/man/clothes"},
                {name: "Shoes", link: "/man/shoes"},
                {name: "Backpacks and Bags", link: "/man/clothes"},
                {name: "Accessories", link: "/man/accessories"},
            ]
        }
    ])
    const [links] = useState([
        {name: "Electronics", link: "/electronics"},
        {name: "Home & Lifestyle", link: "/home&lifestyle"},
        {name: "Medicine", link: "/medicine"},
        {name: "Sports & Outdoor", link: "/sport&outdoor"},
        {name: "Baby's & Toys", link: "/babys&toys"},
        {name: "Groceries & Pets", link: "/groceries&pets"},
        {name: "Health & Beauty", link: "/health&beauty"},
    ]);

    return (
        <nav className={`${classes["categories-sidebar"]} ${className}`}>
            <ul className={classes["sidebar-list"]}>
                {dropdownMenus.map(({categoriesName, link, subcategories}, index) => (
                    <li key={index} className={classes["sidebar-item__category"]}>
                        <Link to={link} className={classes["sidebar-link"]}>
                            {categoriesName}
                        </Link>
                        <Chevron width={24} height={24} className={classes["sidebar-icon"]} />
                        <ul className={classes["subcategory-list"]}>
                            {subcategories.map(({name, link}, index) => (
                                <li key={index} className={classes["subcategory-item"]}>
                                    <Link to={link} className={classes["subcategory-link"]}>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
                {links.map(({name, link}, index) => (
                    <li key={index} className={classes["sidebar-item"]}>
                        <Link to={link} className={classes["sidebar-link"]}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}