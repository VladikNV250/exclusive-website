import classes from "./ServiceList.module.scss";
import { useState } from "react";
import ServiceCard from "@/UI/cards/ServiceCard/ServiceCard";
import Delivery from "@/assets/icons/delivery.svg";
import Headphones from "@/assets/icons/headphone-two.svg";
import Protect from "@/assets/icons/secure-two.svg";

export default function ServiceList() {
    const [services] = useState([
        {Icon: Delivery, title: "FREE AND FAST DELIVERY", subtitle: "Free delivery for all orders over $140"},
        {Icon: Headphones, title: "24/7 CUSTOMER SERVICE", subtitle: "Friendly 24/7 customer support"},
        {Icon: Protect, title: "MONEY BACK GUARANTEE", subtitle: "We return money within 30 days"},
    ])
    
    return (
        <div className={classes["service-container"]}>
            {services.map(({Icon, title, subtitle}, index) => 
                <ServiceCard
                    key={index}
                    Icon={Icon}
                    title={title}
                    subtitle={subtitle}
                />
            )}
        </div>
    )
}