import Heading from "@/UI/headers/Heading/Heading";
import classes from "./Banner.module.scss";
import { Timer } from "@/components/Timer/Timer";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import jbl from "@/assets/banner/jbl.png";

export default function Banner() {
    const saleDate = new Date(2024, 11, 29);
    
    return (
        <section className={classes["banner"]}>
            <div className={classes["banner-container"]}>
                <div className={classes["banner-content"]}>
                    <Heading level="h6" className={classes["banner-subtitle"]}>
                        Categories
                    </Heading>
                    <Heading level="h1" className={classes["banner-title"]}>
                        Enhance Your Music Experience    
                    </Heading>
                    <div className={classes["timer-wrapper"]}>
                        <Timer date={saleDate} type="circle" colorStyle="white" />
                    </div>
                    <ButtonLarge className={classes["banner-button"]}>
                        Buy Now!
                    </ButtonLarge>
                </div>
                <div className={classes["image-container"]}>
                    <div className={classes["image-decor"]} />
                    <img src={jbl} className={classes["image"]} />
                </div>
            </div>
        </section>
    )
}