import classes from "./SpecialsList.module.scss";
import Delivery from "@/assets/icons/delivery.svg";
import Return from "@/assets/icons/return.svg";

export default function SpecialsList() {
    const specials = [
        {
            Icon: Delivery, 
            title: "Free Delivery", 
            link: "Enter your postal code for Delivery Availability",
            url: "/"
        },
        {
            Icon: Return, 
            title: "Return Delivery", 
            subtitle: "Free 30 Days Delivery Returns. ", 
            link: "Details",
            url: "/"
        },
    ]

    return (
        <div className={classes["specials-list"]}>
            {specials.map((item, index) => 
            <div key={index} className={classes["specials-item"]}>
                <item.Icon width={40} height={40} />
                <div className={classes["item-body"]}>
                    <h4 className={classes["item-title"]}>{item.title}</h4>
                    <p className={classes["item-subtitle"]}>{item.subtitle}</p>
                    <a href={item.url} className={classes["item-link"]}>{item.link}</a>
                </div>
            </div>
            )}
        </div>
    )
}