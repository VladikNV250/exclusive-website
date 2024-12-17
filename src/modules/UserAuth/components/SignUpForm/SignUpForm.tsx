import InputAuth from "@/UI/inputs/InputAuth/InputAuth";
import classes from "./SignUpForm.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import ButtonGoogle from "@/UI/buttons/ButtonGoogle/ButtonGoogle";

export default function SignUpForm() {
    return (
        <form className={classes["sign-up"]}>
            <InputAuth placeholder="Name" name="name" />
            <InputAuth placeholder="Email or Phone Number" name="email-phone" />
            <InputAuth placeholder="Password" name="password" type="password" />
            <div className={classes["buttons-container"]}>
                <div className={classes["button-wrapper"]}>
                    <ButtonLarge type="submit">
                        Create Account
                    </ButtonLarge>
                </div>
                <ButtonGoogle />
            </div>
        </form>
    )
}