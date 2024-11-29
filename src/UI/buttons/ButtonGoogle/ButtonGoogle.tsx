import { ButtonHTMLAttributes } from "react";
import classes from "./ButtonGoogle.module.scss";
import Google from "@/assets/icons/google.svg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    otherProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function ButtonGoogle({...otherProps}: Props) {
    return (
        <button className={classes["button-google"]} {...otherProps}>
            <Google className={classes["icon"]} width={24} height={24} />
            Sign up with Google
        </button>
    )
}