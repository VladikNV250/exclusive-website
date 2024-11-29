import Roadmap from "@/components/Roadmap/Roadmap";
import classes from "./Contact.module.scss";
import ContactModule from "@/modules/ContactModule/ContactModule";

export default function Contact() {
    const links = [
        {name: "Home", url: "/"},
        {name: "Contact", url: "/contact"},
    ]

    return (
        <main>
            <Roadmap links={links} />
            <ContactModule />
        </main>
    )
}