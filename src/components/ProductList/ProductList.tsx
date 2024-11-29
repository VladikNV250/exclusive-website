import classes from "./ProductList.module.scss";
import { ProductProps } from "../ProductCard/types/types";

import ProductCard from "../ProductCard/ProductCard";

interface Props {
    products: ProductProps[],
}

export default function ProductList({products}: Props) {
    return (
        <div className={classes["product-list"]}>
            {products.map(({image, name, price, oldPrice, options}, key) => 
                <ProductCard
                    key={key}
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