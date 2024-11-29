import CirclePagination from "@/UI/paginations/CirclePagination/CirclePagination";
import classes from "./Slider.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import SlideType1 from "./Slides/SlideType1/SlideType1";
import iphone from "@/assets/slider/iphone.jpg";
import apple from "@/assets/slider/apple.png";
import samsung from "@/assets/slider/samsung.png";
import xiaomi from "@/assets/slider/xiaomi.svg.png";
import nvidia from "@/assets/slider/nvidia.png";
import hp from "@/assets/slider/hp.png";
import laptop from "@/assets/slider/laptop.png";
import videocard from "@/assets/slider/videocard.png";
import galaxy from "@/assets/slider/galaxy.png";
import redmi from "@/assets/slider/redmi.png";


export default function Slider() {
    const [currentItem, setCurrentItem] = useState(3);
    const interval = useRef(null);

    const startInterval = () => {
        interval.current = setInterval(() => {
            setCurrentItem((currentItem) => {
                if (currentItem === 5) return 1;
                else return currentItem + 1;
            })
        }, 3000);
    }
    
    const resetInterval = useCallback(() => {
        clearInterval(interval.current);
        startInterval();
    }, [])

    const paginationHandler = (newItem: number) => {
        setCurrentItem(newItem);
        resetInterval();
    }
    
    useEffect(() => {
        startInterval();
        return () => clearInterval(interval.current);
    }, [])

    return (
        <div className={classes["slider"]}>
            <div className={classes["slider-container"]}>
                <SlideType1
                    logo={xiaomi}
                    image={redmi}
                    title={{
                        header: "Redmi 6 Dual",
                        content: "Up to 10% off Voucher",
                    }}
                    isSelected={currentItem == 1}
                />
                <SlideType1
                    logo={samsung}
                    image={galaxy}
                    title={{
                        header: "Galaxy A55",
                        content: "Discount to 40%",
                    }}
                    isSelected={currentItem == 2}
                />
                <SlideType1 
                    logo={apple}
                    image={iphone}
                    title={{
                        header: "iPhone 14 Series",
                        content: "Up to 10% off Voucher",
                    }}
                    isSelected={currentItem == 3}
                />
                <SlideType1
                    logo={nvidia}
                    image={videocard}
                    title={{
                        header: "GeForce RTX 3030",
                        content: "Discount to 40%",
                    }}
                    isSelected={currentItem == 4}
                />
                <SlideType1 
                    logo={hp}
                    image={laptop}
                    title={{
                        header: "255 15.6 inch G10 Notebook",
                        content: "Up to 10% off Voucher",
                    }}
                    isSelected={currentItem == 5}
                />
            </div>
            <div className={classes["pagination-wrapper"]}>
                <CirclePagination 
                    totalItems={5} 
                    currentItem={currentItem} 
                    onChange={paginationHandler}
                />
            </div>
        </div>
    )
}