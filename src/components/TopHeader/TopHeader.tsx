import Select from "@/UI/selects/Select/Select";
import classes from "./TopHeader.module.scss";
import { useState } from "react";

export default function TopHeader() {
    const [options] = useState([
        {value: "en", name: "English"},
        {value: "ua", name: "Ukrainian"},
    ])

    return (
        <div className={classes["top-header"]}>
            <div className={classes["top-header--container"]}>
                <div className={classes["top-header--content"]}>
                    <p className={classes["top-header--text"]}>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </p>
                    <a href="/" className={classes["top-header--link"]}>
                        Shop Now
                    </a>
                </div>
                <div className={classes["select-wrapper"]}>
                    <Select options={options} />
                </div>
            </div>
        </div>
    )
}