import { ReviewStar } from "@/components/ReviewStar/ReviewStar";
import classes from "./ProductReviewStar.module.scss";

interface Props {
    point: number,
    numberOfReviews: number,
}

export function ProductReviewStar({point, numberOfReviews = 0}: Props) {
    return (
        <div className={classes["stars-container"]}>
            <ReviewStar point={point} />
            <p className={classes["review-count"]}>
                {numberOfReviews <= 0 ? null : `(${numberOfReviews})`}
            </p>
        </div>
    )
}