export type CardOptions = {
    tagNew?: boolean,
    tagDiscount?: boolean,
    wishlist?: boolean,
    trash?: boolean,
    quickView?: boolean,
    rating?: number,
    numberOfReviews?: number,
    availableColors?: string[],
}

export type cardChildren = {
    left: React.ReactNode[],
    right: React.ReactNode[],
    bottom: React.ReactNode[],
}

export interface ProductProps {
    image: string,
    price: number,
    oldPrice?: number,
    name: string,
    options?: CardOptions,
}