"use client"

import React, { useState } from 'react';
import './furnitureForOrder.scss';
import dynamic from "next/dynamic";
import Link from "next/link";

const Carousel = dynamic(() => import('../../Components/Carousel'), { ssr: false });

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
            const response = await fetch('http://localhost:8080/api/v1/customorder/create', {
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
                <p><Link href="/mainPage">Главная/</Link>Мебель на заказ</p>
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
