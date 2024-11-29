import ContactInfo from "@/components/ContactInfo/ContactInfo";
import classes from "./ContactModule.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactModule() {
    
    
    return (
        <section className={classes["contact-section"]}>
            <div className={classes["contact-container"]}>
                <ContactInfo />
                <ContactForm />
            </div>        
        </section>
    )
}