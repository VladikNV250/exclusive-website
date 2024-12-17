import InputAuth from "@/UI/inputs/InputAuth/InputAuth";
import classes from "./LogIn.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";

export default function LogInForm() {
    return (
        <form className={classes["log-in"]} action="">
            <InputAuth placeholder="Email or Phone Number" name="email-phone_log-in" />
            <InputAuth placeholder="Password" name="password_log-in" type="password" />
            <div className={classes["log-in--container"]}>
                <ButtonLarge>
                    Log In    
                </ButtonLarge>
                <button className={classes["button--forget-password"]}>
                    Forget Password?
                </button>
            </div>
        </form>
    )
}