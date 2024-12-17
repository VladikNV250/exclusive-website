import Roadmap from "@/components/Roadmap/Roadmap";
import classes from "./Contact.module.scss";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import ContactForm from "./components/ContactForm/ContactForm";

export default function Contact() {
    const links = [
        {name: "Home", url: "/"},
        {name: "Contact", url: "/contact"},
    ]

    return (
        <main>
            <Roadmap links={links} />
            <section className={classes["contact-section"]}>
                <div className={classes["contact-container"]}>
                    <ContactInfo />
                    <ContactForm />
                </div>        
            </section>
        </main>
    )
}