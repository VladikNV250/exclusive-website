import Timer from "@/components/Timer/Timer";
import classes from "./Home.module.scss";
import Slider from "@/components/Slider/Slider";
import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import Hero from "@/modules/Hero/Hero";
import Sales from "@/modules/Sales/Sales";
import Category from "@/modules/Category/Category";
import BestSelling from "@/modules/BestSelling/BestSelling";
import Banner from "@/modules/Banner/Banner";
import Explore from "@/modules/Explore/Expore";
import NewArrival from "@/modules/NewArrival/NewArrival";


export default function Home() {
    // const currentDate = new Date();
    const date = new Date(2024, 10, 26, 11, 10);
    // date.setDate(currentDate.getDate() + 3);


    return (
        <main className={classes.home}>
            <Hero />
            <Sales />
            <Category />
            <BestSelling />
            <Banner />
            <Explore />
            <NewArrival />
        </main>
    )
}
