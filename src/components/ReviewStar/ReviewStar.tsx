import classes from "./ReviewStar.module.scss";
import Star from "@/assets/icons/star.svg";

interface Props {
    point: number,
}

export function ReviewStar({point}: Props) {
    function fullInStar(pointOfStar: number) {
        if (pointOfStar <= point) return classes["star__full"];
        else if (pointOfStar == point + 0.5) return classes["star__half"];
        else return classes["star"];
    }

    if (point > 0) return (
        <div className={classes["stars"]}>
            {Array.from({length: 5}).map((_, index) => (
                <Star 
                    key={index}
                    className={fullInStar(index + 1)} 
                    width={20} 
                    height={20} 
                />
            ))}
        </div>
    )
}