export interface IProduct {
    id: number,
    name: string,
    price: number,
    oldPrice?: number,
    image: string,
    tags?: string[],
    options?: {
        isNew?: boolean,
        haveQuickView?: boolean,
        rating?: number,
        numberOfReviews?: number,
        availableColors?: string[],
        haveCartIcon?: boolean;
    }
}