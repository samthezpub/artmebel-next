"use client";

import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../config";
import './similarProducts.scss';
import Image from "next/image";
import ProductImageSlider from "@/Components/ProductImageSlider";

export default function SimilarProducts({Curproduct}) {
    const [product, setProduct] = useState(Curproduct)
    const [category_id, setCategory_id] = useState(Curproduct.category.id)
    const [similarProducts, setSimilarProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    async function getCategoryProducts() {
        try {
            let response = await fetch(
                `${BASE_URL}/api/v1/catalog/category/${category_id}/get-all`,
                { cache: "force-cache" }
            );
            if (!response.ok) {
                throw new Error(`Ошибка сети: ${response.status}`);
            }
            let result = await response.json();

            // Фильтруем текущий продукт
            const filteredProducts = result.filter(product => product.id !== currentProductId);
            setSimilarProducts(filteredProducts);
        } catch (error) {
            console.error("Ошибка при получении данных продукта:", error);
        }
    }

    useEffect(() => {
        getCategoryProducts();
        console.log(Curproduct)
        console.log(category_id)
    }, [category_id]);

    const itemsPerPage = 5;

    const handleNext = () => {
        if (currentIndex < similarProducts.length - itemsPerPage) {
            setCurrentIndex(currentIndex + itemsPerPage);
        } else {
            setCurrentIndex(0); // Вернуться в начало
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        } else {
            setCurrentIndex(similarProducts.length - (similarProducts.length % itemsPerPage || itemsPerPage)); // Вернуться в конец
        }
    };

    if (!similarProducts.length) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="slider-container">
            <Image className="prev-btn" onClick={handlePrev} src={"/catalog/categorySlug/left-arr.png"} width={33} height={40} />

            <div className="slider-wrapper">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                >
                    {similarProducts.map((product) => (
                        <div className="product" key={product.id}>
                            <div className="heart-container" onClick={() => addToFavorite(product.id)}>
                                <Image className="heart-outline" src={"/catalog/categorySlug/like.svg"}
                                       alt={"Добавить в избранное"} width={40} height={40} />
                                <Image className="like-filled" src={"/catalog/categorySlug/like-fill.svg"}
                                       alt={"Добавить в избранное"} width={40} height={40} />
                            </div>
                            <ProductImageSlider productId={product.id} imagesCount={product.photosCount} />
                            <p className="price">{product.price} ₽</p>
                            <h3 className="name">{product.name}</h3>
                            <Image className="line" src={"/catalog/categorySlug/line.png"} width={170} height={2} />
                            <Image className="cart-icon" src={"/catalog/categorySlug/cart.png"} width={36} height={36}
                                   onClick={() => addToCart(product.id)} />
                        </div>
                    ))}
                </div>
            </div>

            <Image className="next-btn" onClick={handleNext} src={"/catalog/categorySlug/right-arr.png"} width={33} height={40} />
        </div>
    );
}
