export type Size = "XS" | "S" | "M" | "X" | "XL" | "XXL" | "XXXL";

export interface Product {
    title: string,
    reviews: {
        point: number,
        numberOfReviews: number,
        isInStock: boolean,
    },
    price: number,
    description: string,
    colors: string[],
    sizes: Size[],
    quantity: number,
}