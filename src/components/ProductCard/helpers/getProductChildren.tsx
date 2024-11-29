import Tag from "@/UI/tags/Tag";
import { cardChildren, CardOptions } from "../types/types";
import ButtonAdditional from "@/UI/buttons/ButtonAdditional/ButtonAdditional";
import ReviewStar from "@/UI/widgets/ReviewStar/ReviewStar";
import RadioColor from "@/UI/radio/RadioColor/RadioColor";
import Heart from "@/assets/icons/heart-small.svg";
import Trash from "@/assets/icons/trash.svg";
import quickViewIcon from "@/assets/icons/quick-view.svg";
import getDiscount from "./getDiscount";


export default function getProductChildren(name: string, price: number, oldPrice: number, options: CardOptions): cardChildren {
    const left = [];
    const right = [];
    const bottom = [];

    const tagNew = <Tag type="new" />;
    const tagDiscount =
    <Tag type="discount">
        {getDiscount(price, oldPrice)}
    </Tag>
    const wishBtn = <ButtonAdditional Icon={Heart} name="heart" />
    const trashBtn = <ButtonAdditional Icon={Trash} name="trash" />
    const viewBtn = <ButtonAdditional Icon={quickViewIcon} name="view" />
    const reviewStar = <ReviewStar point={options.rating ? options.rating : 0} numberOfReviews={options.numberOfReviews} />
    const radioColors = <RadioColor colors={options.availableColors} name={name} />

    if (options.tagNew) left.push(tagNew);
    if (options.tagDiscount) left.push(tagDiscount);
    if (options.wishlist) right.push(wishBtn);
    if (options.trash) right.push(trashBtn);
    if (options.quickView) right.push(viewBtn);
    if (options.rating) bottom.push(reviewStar);
    if (options.availableColors) bottom.push(radioColors);

    return {
        left,
        right,
        bottom,
    }
}