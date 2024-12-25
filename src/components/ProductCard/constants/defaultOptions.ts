import { IProduct } from "@/models/IProduct";

export const defaultOptions: IProduct["options"] = {
    isNew: false,
    haveQuickView: false,
    rating: 0,
    numberOfReviews: 0,
    availableColors: [],
    haveCartIcon: false,
}