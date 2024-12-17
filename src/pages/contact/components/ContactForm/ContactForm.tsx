import InputInfoBox from "@/UI/inputs/InputInfoBox/InputInfoBox";
import classes from "./ContactForm.module.scss";
import TextareaInfoBox from "@/UI/textareas/TextareaInfoBox/TextareaInfoBox";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";

export default function ContactForm() {
    return (
        <form action="" className={classes["contact-form"]}>
            <div className={classes["inputs-container"]}>
                <InputInfoBox placeholder="Your Name"  type="text"   required />
                <InputInfoBox placeholder="Your Email" type="email"  required />
                <InputInfoBox placeholder="Your Phone"  type="phone" required />
            </div>
            <TextareaInfoBox placeholder="Your Message" />
            <div className={classes["button-wrapper"]}>
                <ButtonLarge type="submit">
                    Send Message
                </ButtonLarge>
            </div>
        </form>
    )
}