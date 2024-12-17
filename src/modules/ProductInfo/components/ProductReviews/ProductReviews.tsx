import { ReviewStar } from "@/components/ReviewStar/ReviewStar";
import classes from "./ProductReviews.module.scss";

interface Props {
    point: number,
    numberOfReviews: number,
    isInStock: boolean,
}

export default function ProductReviews({point, numberOfReviews, isInStock}: Props) {
    return (
        <div className={classes["review-container"]}>
            <ReviewStar point={point} />
            <p className={classes["review-count"]}>
                {numberOfReviews <= 0 ? null : `(${numberOfReviews} Reviews)`}
            </p>
            <div className={classes["vertical-line"]} />
            {isInStock 
            ? 
                <p className={classes["in-stock"]}>
                    In Stock
                </p>
            :
                <p className={classes["out-of-stock"]}>
                    Out Of Stock
                </p>
            }
        </div>
    )
}