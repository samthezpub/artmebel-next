"use client";

import React, { useState } from 'react';
import Image from "next/image";
import './ProductImageSlider.scss';

export default function ProductImageSlider({ productId, imagesCount }) {
    const [currentImage, setCurrentImage] = useState(1);

    // Функция для перехода на следующее изображение
    const handleNext = () => {
        setCurrentImage((prev) => (prev < imagesCount ? prev + 1 : 1));
    };

    // Функция для перехода на предыдущее изображение
    const handlePrev = () => {
        setCurrentImage((prev) => (prev > 1 ? prev - 1 : imagesCount));
    };

    // Генерация URL для изображения на основе productId и currentImage
    const getImageUrl = (productId, imageNumber) => {
        return `https://d2197f97-art-mebel.s3.timeweb.cloud/${productId}_${imageNumber}.jpg`;
    };

    // Генерация точек для навигации
    const makeDots = () => {
        return Array.from({ length: imagesCount }).map((_, index) => (
            <div
                key={index}
                className={`dot ${index + 1 === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(index + 1)}
            />
        ));
    };

    return (
        <div className="image-slider">
            <Image src={"/catalog/categorySlug/left-arr.png"} width={10} height={16} className="slider-arrow prev-arrow" onClick={handlePrev}/>


            <Image
                src={getImageUrl(productId, currentImage)}
                width={170}  // Можешь изменить ширину и высоту по необходимости
                height={183}
                alt={`Картинка продукта номер ${currentImage}`}
            />

            <Image src={"/catalog/categorySlug/right-arr.png"} width={10} height={16} className="slider-arrow next-arrow" onClick={handleNext}/>


            <div className="dots-count">
                {makeDots()}
            </div>
        </div>
    );
}