"use client";

import React, { useState, useEffect, useRef } from "react";
import "./Carousel.scss"; // файл для стилизации

const Carousel = () => {
    const [currIndex, setCurrIndex] = useState(0);
    const [width, setWidth] = useState("100%");
    const [height, setHeight] = useState(600 * 0.5);
    const sliderRef = useRef(null);
    const itemsRef = useRef([]);
    const intervalTime = 4000;
    let interval = useRef(null);
    const items = ["/mainPage/mebel/0.png", "/mainPage/mebel/1.png", "/mainPage/mebel/2.png"]; // заменяет PUG each

    const resize = () => {
        const newWidth = Math.max(window.innerWidth * 0.25, 275);
        setWidth(newWidth);
        setHeight(window.innerHeight * 0.5);
        sliderRef.current.style.width = `${newWidth * items.length}px`;

        itemsRef.current.forEach((item) => {
            item.style.width = `${newWidth - 40}px`; // margin * 2
            item.style.height = `${window.innerHeight * 0.5}px`;
        });
    };

    const move = (index) => {
        let newIndex = index;

        if (newIndex < 1) newIndex = items.length;
        if (newIndex > items.length) newIndex = 1;
        setCurrIndex(newIndex);

        itemsRef.current.forEach((item, i) => {
            const box = item.querySelector(".item__3d-frame");
            if (i === newIndex - 1) {
                item.classList.add("carousel__slider__item--active");
                box.style.transform = "perspective(1200px)";
            } else {
                item.classList.remove("carousel__slider__item--active");
                box.style.transform = `perspective(1200px) rotateY(${i < newIndex - 1 ? 40 : -40}deg)`;
            }
        });

        sliderRef.current.style.transform = `translate3d(${
            newIndex * -width + width / 2 + window.innerWidth / 2
        }px, 0, 0)`;
    };

    const prev = () => {
        move(currIndex - 1);
    };

    const next = () => {
        move(currIndex + 1);
    };

    useEffect(() => {
        resize();
        move(Math.floor(items.length / 2));

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    useEffect(() => {
        move(currIndex+1)
        move(currIndex+1)
    }, []);

    useEffect(() => {

        const timer = setInterval(() => {
            move(currIndex + 1);
        }, intervalTime);

        return () => clearInterval(timer);
    }, [currIndex]);

    return (
        <div className="carousel">
            <div className="carousel__body">
                <div className="carousel__slider" ref={sliderRef}>
                    {items.map((src, index) => (
                        <div
                            key={index}
                            className="carousel__slider__item"
                            ref={(el) => (itemsRef.current[index] = el)}
                        >
                            <div className="item__3d-frame">
                                <div className="item__3d-frame__box item__3d-frame__box--front">
                                    <img src={src} alt={`Image ${index + 1}`} style={{width: '100%', height: '100%'}}/>
                                </div>
                                <div className="item__3d-frame__box item__3d-frame__box--left"></div>
                                <div className="item__3d-frame__box item__3d-frame__box--right"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
