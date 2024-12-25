import classes from "./ForUserItems.module.scss";

import ProductList from "@/components/ProductList/ProductList";
import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import selectFilteredProducts from "@/store/selectors/selectFilteredProducts";
import { useAppSelector } from "@/hooks/redux";

export default function ForUserItems() {
    const products = useAppSelector(state => selectFilteredProducts(state, "recommendation"))

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