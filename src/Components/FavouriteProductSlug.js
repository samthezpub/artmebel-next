"use client"

import React from 'react'
import Image from "next/image";
import "./FavouriteProductSlug.scss"

export default function FavouriteProductSlug({productID}) {

    const addToFavorite = (productId) => {
        let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
        if (!Array.isArray(favorite)) {
            favorite = [];
        }

        if (!favorite.includes(productId)) {
            favorite.push(productId);
            localStorage.setItem("favorite", JSON.stringify(favorite));
            alert(`Товар добавлен в избранное!`);
        } else {
            alert(`Товар уже в избранном.`);
        }
    };

    return (
        <div id="FavouriteProductSlug">
        <div className="heart-container" onClick={() => addToFavorite(productID)}>
            <Image className="heart-outline" src={"/catalog/categorySlug/like.svg"}
                   alt={"Добавить в избранное"} width={40} height={40}/>

        </div>
        </div>
    )
}
