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

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import selectFilteredProducts from "@/store/selectors/selectFilteredProducts";
import { useAppSelector } from "@/hooks/redux";


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
    const products = useAppSelector(state => selectFilteredProducts(state, "related-item"))

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