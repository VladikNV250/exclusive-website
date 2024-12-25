import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import classes from "./NewArrival.module.scss";
import { ServiceList } from "@/components/ServiceList/ServiceList";
import { useState } from "react";
import playstation from "@/assets/new-arrival/playstation.png";
import perfume from "@/assets/new-arrival/perfume.png";
import speakers from "@/assets/new-arrival/speakers.png";
import woman from "@/assets/new-arrival/woman.png";
import NewArrivalCard from "@/pages/home/components/NewArrival/UI/NewArrivalCard/NewArrivalCard";

export default function NewArrival() {
    const items= [
        {
            image: {src: playstation, class: "biggy"}, 
            title: "PlayStation 5", 
            subtitle: "Black and White version of the PS5 coming out on sale.", 
            link: "/electronics",
            layout: {
                columnStart: 1,
                columnEnd: 3,
                rowStart: 1,
                rowEnd: 3,
            }
        },
        {
            image: {src: woman, class: "widely"}, 
            title: "Women’s Collections", 
            subtitle: "Featured woman collections that give you another vibe.", 
            link: "/woman",
            layout: {
                columnStart: 3,
                columnEnd: 5,
                rowStart: 1,
                rowEnd: 2,
            }
        },
        {
            image: {src: speakers, class: "square"}, 
            title: "Speakers", 
            subtitle: "Amazon wireless speakers", 
            link: "/electronics",
            blur: true,
            layout: {
                columnStart: 3,
                columnEnd: 4,
                rowStart: 2,
                rowEnd: 3,
            }
        },
        {
            image: {src: perfume, class: "square"}, 
            title: "Perfume", 
            subtitle: "GUCCI INTENSE OUD EDP", 
            link: "/health&beauty",
            blur: true,
            layout: {
                columnStart: 4,
                columnEnd: 5,
                rowStart: 2,
                rowEnd: 3,
            }
        },
    ];

    return (
        <section className={classes["new-arrival"]}>
            <div className={classes["new-arrival--container"]}>
                <SectionHeader subtitle="Featured" title="New Arrival" />
                <div className={classes["new-arrival--content"]}>
                    {items.map(({title, subtitle, link, layout, blur, image}, key) => 
                        <NewArrivalCard
                            key={key}
                            title={title}
                            subtitle={subtitle}
                            link={link}
                            layout={layout}
                            blur={blur ? blur : false}
                            image={<img src={image.src} className={classes[`image-${image.class}`]} />}
                        />
                    )}
                </div>
                <ServiceList />
            </div>
        </section>
    )
}