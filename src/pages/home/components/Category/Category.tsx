import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import classes from "./Category.module.scss";
import ButtonNavigation from "@/UI/buttons/ButtonNavigation/ButtonNavigation";
import { CategoryCarousel } from "@/components/CategoryCarousel/CategoryCarousel";



export default function Category() {
    
    
    return (
        <section className={classes["category-section"]}>
            <div className={classes["category-container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle="Categories" title="Browse By Category" />
                    <div className={classes["button-container"]}>
                        <ButtonNavigation direction="left" />
                        <ButtonNavigation direction="right" />
                    </div>
                </div>
                <CategoryCarousel />
            </div>
        </section>
    )
}