import Roadmap from "@/components/Roadmap/Roadmap";
import { ServiceList } from "@/components/ServiceList/ServiceList";
import Story from "@/pages/about/components/Story/Story";
import classes from "@/pages/about/About.module.scss";
import StatisticList from "./components/StatisticList/StatisticList";
import PersonSlider from "./components/PersonSlider/PersonSlider";

export default function About() {
  const links = [
    {name: "Home", url: "/"},
    {name: "About", url: "/about"},
  ]

  return (
    <main className={classes["about"]}>
        <Roadmap links={links} />
        <Story />
        <section className={classes["about-section"]}>
          <div className={classes["about-container"]}>
            <StatisticList />
            <PersonSlider />
            <ServiceList />
          </div>
        </section>
    </main>
  )
}
