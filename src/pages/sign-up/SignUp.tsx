import classes from "./SignUp.module.scss";
import Heading from "@/UI/headers/Heading/Heading";
import image from "@/assets/login/login-image.png";
import LinkUnderlined from "@/UI/links/Link/LinkUnderlined";
import UserAuth from "@/modules/UserAuth/UserAuth";

export default function SignUp() {
    return (
        <main className={classes["sign-up"]}>
            <UserAuth type="sign-up" />
        </main>
    )
}