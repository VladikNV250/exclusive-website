import Heading from "@/UI/headers/Heading/Heading";
import classes from "./SlideType1.module.scss";
import Arrow from "@/assets/icons/arrow-right.svg";
import classNames from "classnames";

interface Props {
    logo: string,
    title: {
        header: string,
        content: string,
    },
    image: string,
    isSelected: boolean;
}

export default function SlideType1({logo, title, image, isSelected = false}: Props) {
    const slideClass = classNames({
        [classes["slide-container"]]: true,
        [classes["slide-container__selected"]]: isSelected,
    })

    return (
        <div className={slideClass} >
            <div className={classes["slide-content"]}>
                <header className={classes["slide-header"]}>
                    <img src={logo} className={classes["header-logo"]} />
                    <Heading level="h6" className={classes["header-title"]}>
                        {title.header}
                    </Heading>
                </header>
                <Heading level="h1" className={classes["slide-title"]}>
                    {title.content}
                </Heading>
                <a href="/" className={classes["slide-link"]}>
                    <p className={classes["cta-text"]}>
                        Shop Now
                    </p>
                    <Arrow width={24} height={24} />
                </a>
            </div>
            <img src={image} className={classes["slide-background"]} />
        </div>
    )
}