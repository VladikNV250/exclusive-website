import Logo from "@/UI/headers/Logo/Logo";
import classes from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputSearch from "@/UI/inputs/InputSearch/InputSearch";
import Heart from "@/assets/icons/heart-small.svg";
import Cart from "@/assets/icons/cart.svg";
import ButtonBurger from "@/UI/buttons/ButtonBurger/ButtonBurger";
import LinkUnderlined from "@/UI/links/LinkUnderlined/LinkUnderlined";
import TopHeader from "./components/TopHeader/TopHeader";

export function Navbar() {
    const [links] = useState([
        {name: "Home", url: "/"},
        {name: "Contact", url: "/contact"},
        {name: "About", url: "/about"},
        {name: "Sign up", url: "/sign-up"},
    ])
    const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

    
    return (
        <>
            <TopHeader />
            <nav className={classes.navbar}>
                <div className={classes["navbar-container"]}>
                    <ButtonBurger isOpen={false} />
                    <Logo>
                        Exclusive
                    </Logo>
                    <div className={classes["links-container"]}>
                        {links.map(({name, url}, index) => {
                        const className = url === currentUrl && classes["link__current"];
                        return (
                        <LinkUnderlined 
                            to={url} 
                            key={index} 
                            className={className}
                            onClick={() => setCurrentUrl(url)}
                        >
                            {name}
                        </LinkUnderlined>
                        )
                        })}
                    </div>
                    <div className={classes["navbar-content"]}>
                        <InputSearch />
                        <Link to={"/wishlist"} className={classes["icon-link__heart"]}>
                            <Heart width={32} height={32} />
                        </Link>
                        <Link to={"/cart"} className={classes["icon-link__cart"]}>
                            <Cart width={32} height={32} />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
        
    )
}
