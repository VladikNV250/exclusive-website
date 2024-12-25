import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProduct } from "@/models/IProduct";

const selectByIdProducts = createSelector(
    (state: RootState) => state.productReducer.products, // get massive of products
    (_, productIDs: number[]) => productIDs, // get massive of product's ids
    
    (products: IProduct[], productIDs: number[]) => {
        const findedProducts: IProduct[] = [];
        productIDs.forEach(id => {
            const product = products.find(product => product.id === id);
            findedProducts.push(product);
        })
        return findedProducts;
    }
)

export default selectByIdProducts;