import classes from "./CartHeading.module.scss";
import Heading from "@/UI/headers/Heading/Heading";

export default function CartHeading() {
    return (
        <Heading level="h5" className={classes["heading"]}>
            Cart Total
        </Heading>
    )
}