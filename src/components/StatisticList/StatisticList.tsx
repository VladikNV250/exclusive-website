import { useState } from "react";
import classes from "./StatisticList.module.scss";
import StatisticCard from "@/UI/cards/StatisticCard/StatisticCard";
import Store from "@/assets/icons/shop-one.svg";
import Dollar from "@/assets/icons/sale.svg";
import ShoppingBag from "@/assets/icons/shopping-bag.svg";
import MoneyBag from "@/assets/icons/money-bag.svg";

export default function StatisticList() {
    const [statistics] = useState([
        {Icon: Store, title: "10.5k", subtitle: "Sallers active our site"},
        {Icon: Dollar, title: "33k", subtitle: "Mopnthly Produduct Sale"},
        {Icon: ShoppingBag, title: "45.5k", subtitle: "Customer active in our site"},
        {Icon: MoneyBag, title: "25k", subtitle: "Anual gross sale in our site"},
    ])
    
    return (
        <div className={classes["statistic-list"]}>
            {statistics.map(({Icon, title, subtitle}, key) => 
                <StatisticCard
                    key={key}
                    Icon={Icon}
                    title={title}
                    subtitle={subtitle}
                />
            )}
        </div>
    )
}