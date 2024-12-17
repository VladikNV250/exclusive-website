import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import classes from "./ToCheckout.module.scss";
import { Link } from "react-router-dom";

export default function ToCheckout() {
    return (
        <Link to={"/checkout"} className={classes["button"]}>
            <ButtonLarge>
                Procees to checkout    
            </ButtonLarge>
        </Link>
        
    )
}