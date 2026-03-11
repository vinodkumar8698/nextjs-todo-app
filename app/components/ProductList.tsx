"use client"
import {  useEffect } from "react";
import ProductCard from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productListSlice";
import { Product, PRODUCT_LIST } from "../types";


const ProductList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts("https://fakestoreapi.com/products"))
    }, [])
    const products = useSelector((state: PRODUCT_LIST) => state.ProductList)
    if (products.data.length < 0) return <h2>No products...</h2>
    if (products.loading) return <h2>Loading...</h2>
    if (products.error) return <h2>{products.error}...</h2>
    return (
        <div>
            <h2>{products.data.length}</h2>

            <div style={{ display: "flex", gap: "10%", flexWrap: "wrap" }}>
                {products.data.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProductList;