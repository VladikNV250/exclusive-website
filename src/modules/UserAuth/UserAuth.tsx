import classes from "./UserAuth.module.scss";
import Heading from "@/UI/headers/Heading/Heading";
import image from "@/assets/login/login-image.png";
import LinkUnderlined from "@/UI/links/Link/LinkUnderlined";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import LogInForm from "@/components/LogInForm/LogInForm";

interface Props {
    type: "log-in" | "sign-up";
}

export default function UserAuth({type}: Props) {
    return (
        <section className={classes["auth"]}>
            <div className={classes["auth-container"]}>
                <img src={image} className={classes["auth-image"]} />
                <div className={classes["auth-content"]}>
                    <Heading level="h2" className={classes["auth-title"]}>
                        {type === "log-in" && "Log in to Exclusive"}
                        {type === "sign-up" && "Create an account"}
                    </Heading>
                    <p className={classes["auth-subtitle"]}>
                        Enter your details below
                    </p>
                    {type === "sign-up" && <SignUpForm />}
                    {type === "log-in" && <LogInForm />}
                    {type === "sign-up" &&
                    <div className={classes["auth-body"]}>
                        <p className={classes["auth-text"]}>
                            Already have account?
                        </p>
                        <div className={classes["link-wrapper"]}>
                            <LinkUnderlined to="/log-in">
                                Log in
                            </LinkUnderlined>
                        </div>
                    </div>}
                </div>
            </div>
        </section>

    )
}