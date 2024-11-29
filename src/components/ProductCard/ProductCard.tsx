import ProductCardUI from "@/UI/cards/ProductCardUI/ProductCardUI";
import { ProductProps } from "./types/types";
import getProductChildren from "./helpers/getProductChildren";

export default function ProductCard({image, name, price, oldPrice, options = {}}: ProductProps) {
    return (
        <ProductCardUI 
            image={image}
            name={name}
            price={price}
            oldPrice={oldPrice}
            children={getProductChildren(name, price, oldPrice, options)}
        />
    )
}