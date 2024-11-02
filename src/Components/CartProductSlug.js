"use client"

import React from 'react'
import Image from "next/image";
import "./CartProductSlug.scss"

export default function CartProductSlug({productID}) {

    const addToCart = (productId) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (!Array.isArray(cart)) {
            cart = [];
        }

        if (!cart.includes(productId)) {
            cart.push(productId);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`Товар добавлен в корзину!`);
        } else {
            alert(`Товар уже в корзине.`);
        }
    };
    return (
            <Image className="cart-icon" id="CartProductSlug" src={"/catalog/categorySlug/cart.png"} width={36} height={36}
                    onClick={() => addToCart(productID)}/>
    )
}
