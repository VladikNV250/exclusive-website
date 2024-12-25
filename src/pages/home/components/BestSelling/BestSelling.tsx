import classes from "./BestSelling.module.scss";

import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import ProductList from "@/components/ProductList/ProductList";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import selectFilteredProducts from "@/store/selectors/selectFilteredProducts";
import { useAppSelector } from "@/hooks/redux";


export default function BestSelling() {
    const products = useAppSelector(state => selectFilteredProducts(state, "best-selling"));

    return (
        <section className={classes["best-selling"]}>
            <div className={classes["best-selling--container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle="This Month" title="Best Selling Products" />
                    <Link to="/best-selling">
                        <ButtonLarge>
                            View All
                        </ButtonLarge>
                    </Link>
                </div>
                <ProductList products={products}/>
            </div>
        </section>
    )
}