import classes from "./Footer.module.scss";

import { useState } from "react";

import QRcode from "@/assets/footer/qrcode.png";
import googlePlay from "@/assets/footer/get-in-google-play.png";
import appStore from "@/assets/footer/app-store.png";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Instagram from "@/assets/icons/instagram.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Copyright from "@/assets/icons/copyright.svg";

import Logo from "@/UI/headers/Logo/Logo";
import FooterInput from "./UI/FooterInput/FooterInput";
import FooterText from "./UI/FooterText/FooterText";
import FooterLink from "./UI/FooterLink/FooterLink";
import FooterIconLinks from "./UI/FooterIconLinks/FooterIconLinks";
import FooterContent from "./UI/FooterContent/FooterContent";


export function Footer() {
    const [links] = useState([
        {Icon: Facebook,  url:"https://www.facebook.com/"},
        {Icon: Twitter,   url:"https://x.com/?lang=uk"},
        {Icon: Instagram, url:"https://www.instagram.com/"},
        {Icon: LinkedIn,  url:"https://ua.linkedin.com/"},
    ])

    return (
        <footer className={classes.footer}>
            <div className={classes["footer-wrapper"]}>
                <div className={classes["footer-container"]}>
                    <FooterContent heading="Subscribe">
                        <Logo colorStyle="white" className={classes["footer-logo"]}>
                            Exclusive
                        </Logo>
                        <FooterText text="Get 10% off your first order" />
                        <FooterInput colorStyle="white" />
                    </FooterContent>
                    <FooterContent heading="Support">
                        <FooterText text="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh." maxWidth="175px"/>
                        <FooterText text="exclusive@gmail.com" />
                        <FooterText text="+88015-88888-9999" />
                    </FooterContent>
                    <FooterContent heading="Account">
                        <FooterLink text="My Account"       url="/account"  />
                        <FooterLink text="Login / Register" url="/sign-up"  />
                        <FooterLink text="Cart"             url="/cart"     />
                        <FooterLink text="Wishlist"         url="/wishlist" />
                        <FooterLink text="Shop"             url="/"     />
                    </FooterContent>
                    <FooterContent heading="Quick Link">
                        <FooterLink text="Privacy Policy" url="/faq/privacy-policy" />
                        <FooterLink text="Terms of use" url="/faq/terms-of-use" />
                        <FooterLink text="FAQ" url="/faq" />
                        <FooterLink text="Contact" url="/contact" />
                    </FooterContent>
                    <FooterContent heading="Download App">
                        <p className={classes["footer-tip"]}>
                            Save $3 with App New User Only
                        </p>
                        <div className={classes["app"]}>
                            <img src={QRcode} />
                            <div className={classes["store-container"]}>
                                <img src={googlePlay} />
                                <img src={appStore} />
                            </div>
                        </div>
                        <FooterIconLinks links={links} />
                    </FooterContent>
                </div>
            </div>
            <div className={classes["copyright-container"]}>
                <Copyright width={20} height={20} />
                <p className={classes["copyright"]}>
                    Copyright Rimel 2022. All right reserved
                </p>
            </div>
        </footer>
    )
}
