import classes from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { IProduct } from "@/models/IProduct";
import { ListMode } from "./types/types";

interface Props {
    products: IProduct[],
    mode?: ListMode,
}

export default function ProductList({products, mode = "slider"}: Props) {
    const productsClass = mode === "slider" ? classes["product-list"] : classes["product-list__all"];

    return (
        <div className={productsClass}>
            {products.map(({id, image, name, price, oldPrice, options}) => 
                <ProductCard
                    key={id}
                    id={id}
                    image={image}
                    name={name}
                    price={price}
                    oldPrice={oldPrice}
                    options={options}
                />
            )}
        </div>
    )
}