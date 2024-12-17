import classes from "./Story.module.scss";
import story from "@/assets/story/story-image.png";

export default function Story() {
    return (
        <section className={classes["story"]}>
            <div className={classes["story-container"]}>
                <div className={classes["story-body"]}>
                    <h1 className={classes["story-title"]}>
                        Our Story
                    </h1>
                    <p className={classes["story-text"]}>
                        Launced in 2015, Exclusive is South Asia’s premier 
                        online shopping makterplace with an active presense 
                        in Bangladesh. Supported by wide range of tailored 
                        marketing, data and service solutions, Exclusive has 
                        10,500 sallers and 300 brands and serves 3 millioons 
                        customers across the region.<br />
                        <br />
                        Exclusive has more than 1 Million products to offer, 
                        growing at a very fast. Exclusive offers a diverse 
                        assotment in categories ranging  from consumer.
                    </p>
                </div>
                <img src={story} className={classes["story-image"]} />
            </div>
        </section>
    )
}