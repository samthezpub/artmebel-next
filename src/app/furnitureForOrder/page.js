"use client"

import React, { useState } from 'react';
import './furnitureForOrder.scss';
import dynamic from "next/dynamic";
import Link from "next/link";
import {BASE_URL} from "../../config";

const Carousel = dynamic(() => import('../../Components/Carousel'), { ssr: false });


export const metadata = {
    title: 'Мебель на заказ в Мариуполе купить в интернет-магазине "ArtMebel"',
    description: 'Каталог качественной мебели на заказ интернет магазина ArtMebel в Мариуполе по низким ценам.',
    keywords: 'мебель на заказ, мебель на заказ в мариуполе, купить мебель на заказ, купить мебель на заказ в мариуполе, кухни на заказ, кухни на заказ в мариуполе, шкафы на заказ,шкафы на заказ в мариуполе, заказать стол, заказать диван, заказать мебель, заказать кухню, заказать шкаф-купе, заказать стол, заказать офисную мебель, заказать мебель лофт'
}


export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/api/v1/customorder/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Заказ отправлен!");
                setFormData({ name: '', phone: '', message: '' });
            } else {
                alert("Ошибка при отправке заказа");
            }
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };

    return (
        <>
            <div className="pagination">
                <p><Link href="/">Главная/</Link>Мебель на заказ</p>
            </div>
            <div className="carousel-container">
                <Carousel />
            </div>
            <div id={"furnitureForOrder"}>
                <div className="Order">
                    <h1>Заказать мебель</h1>
                    <form onSubmit={handleSubmit}>
                        <input name="name" value={formData.name} onChange={handleChange} placeholder="Имя:" />
                        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон:" />
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Ваши пожелания:" />
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </>
    );
}
