"use client"
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import ProductImageSlider from "./ProductImageSlider";
import {BASE_URL} from "../config";

export default function FavouriteItems() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    async function getProductsIdsFromCart() {
        let cart = JSON.parse(localStorage.getItem("favorite"));

        if (cart && cart.length > 0) {
            let products = [];
            for (let i = 0; i < cart.length; i++) {
                products.push(await getProductFromServer(cart[i]));
            }
            setProducts(products);
            setError(null);
        } else {
            setError("Ваш список избранных пуст");
            setProducts([]); // На случай, если корзина уже отображала что-то
        }
    }

    async function getProductFromServer(id) {
        return await fetch(`${BASE_URL}/api/v1/catalog/getById/${id}`, { next: { revalidate: 3600 } }).then(res => res.json());
    }

    function removeFromCart(productId) {
        let cart = JSON.parse(localStorage.getItem("favorite")) || [];
        const updatedCart = cart.filter(id => id !== productId);
        localStorage.setItem("favorite", JSON.stringify(updatedCart));
        setProducts(products.filter(product => product.id !== productId));

        if (updatedCart.length === 0) {
            setError("Ваш список избранных пуст");
        }
    }

    useEffect(() => {
        getProductsIdsFromCart();
    }, []);

    return (
        <div className="products">
            {error ? (
                <p>{error}</p>
            ) : (
                products.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="heart-container" onClick={() => removeFromCart(product.id)}>
                            <Image className="cross" src="/makeOrder/cross.png" width={20} height={20} alt="Убрать товар из корзины"/>
                        </div>

                        <ProductImageSlider productId={product.id} imagesCount={product.photosCount}></ProductImageSlider>

                        <p className="price">{product.price} ₽</p>
                        <h3 className="name">{product.name}</h3>
                    </div>
                ))
            )}
        </div>
    );
}
