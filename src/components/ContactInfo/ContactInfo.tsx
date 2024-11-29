import classes from "./ContactInfo.module.scss";
import Mail from "@/assets/icons/mail.svg";
import Phone from "@/assets/icons/phone.svg";

export default function ContactInfo() {
    return (
        <nav className={classes["info"]}>
            <div className={classes["info-container"]}>
                <div className={classes["title-container"]}>
                    <div className={classes["info-icon"]}>
                        <Phone 
                            width={40}
                            height={40}
                        />
                    </div>
                    <h6 className={classes["info-title"]}>
                        Call To Us
                    </h6>
                </div>
                <div className={classes["text-container"]}>
                    <p className={classes["info-text"]}>
                        We are available 24/7, 7 days a week.
                    </p>
                    <p className={classes["info-text"]}>
                        Phone: +8801611112222
                    </p>
                </div>
            </div>
            <div className={classes["info-container"]}>
                <div className={classes["title-container"]}>
                    <div className={classes["info-icon"]}>
                        <Mail 
                            width={40}
                            height={40}
                        />
                    </div>
                    <h6 className={classes["info-title"]}>
                        Write To US
                    </h6>
                </div>
                <div className={classes["text-container"]}>
                    <p className={classes["info-text"]}>
                        Fill out our form and we will contact you within 24 hours.
                    </p>
                    <p className={classes["info-text"]}>
                        Emails: customer@exclusive.com
                    </p>
                    <p className={classes["info-text"]}>
                        Emails: support@exclusive.com
                    </p>
                </div>
            </div>
        </nav>
    )
}