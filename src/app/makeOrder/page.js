"use client";
import React, { useState } from 'react';
import './makeOrder.scss';
import Image from "next/image";
import Link from "next/link";
import ProductImageSlider from "../../Components/ProductImageSlider";
import CartItems from "../../Components/CartItems";
import { useRouter } from 'next/router';
import axios from 'axios';
import {BASE_URL} from "../../config";

export const metadata = {
    title: 'Корзина в интернет-магазине "ArtMebel"',
    description: 'Ваша корзина в интернет магазине ArtMebel в Мариуполе',
    keywords: ''
}

export default function Page() {
    const [userType, setUserType] = useState("phisLico");
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        fathername: '',
        phone: '',
        email: '',
        address: '',
    });
    const [agreement, setAgreement] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const handleCheckboxChange = () => {
        setAgreement(!agreement);
    };

    const handleOrderSubmit = async () => {
        if (!agreement) {
            alert("Необходимо согласиться с условиями");
            return;
        }

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            alert("Ваша корзина пуста");
            return;
        }

        const orderData = {
            userType,
            ...formData,
            productIds: cart, // передаем массив ID товаров
        };

        try {
            const response = await axios.post(`${BASE_URL}/api/v1/cart-order/create`, orderData);
            alert("Заказ успешно создан!");
            localStorage.removeItem("cart"); // Очищаем корзину
            setCartItems([]); // Обновляем состояние для отображения пустой корзины
            window.location.href = "/";
        } catch (error) {
            console.error("Ошибка при создании заказа:", error);
            alert("Ошибка при создании заказа");
        }
    };

    return (
        <div id="makeOrder">
            <div className="container">
                <div className="pagination">
                    <p><Link href="/">Главная/</Link>Оформление заказа</p>
                </div>
                <h1 className="text">Корзина</h1>
                <div className="order-and-cart">
                    <div className="leftPart">
                        <form>
                            <div className="choose">
                                <div className="firstFilter">
                                    <input type="radio" name="paymethod" value="phisLico"
                                           checked={userType === "phisLico"} onChange={handleUserTypeChange}/>
                                    <label htmlFor="phisLico">Физическое лицо</label>
                                </div>
                                <div className="secondFilter">
                                    <input type="radio" name="paymethod" value="lawLico"
                                           checked={userType === "lawLico"} onChange={handleUserTypeChange}/>
                                    <label htmlFor="lawLico">Юридическое лицо</label>
                                </div>
                            </div>
                            <div className="dataUser">
                                <input name="name" placeholder="Имя:" value={formData.name} onChange={handleFormChange}/>
                                <input name="surname" placeholder="Фамилия:" value={formData.surname} onChange={handleFormChange}/>
                                <input name="fathername" placeholder="Отчество:" value={formData.fathername} onChange={handleFormChange}/>
                                <input name="phone" placeholder="Номер телефона:" value={formData.phone} onChange={handleFormChange}/>
                                <input name="email" placeholder="Email:" value={formData.email} onChange={handleFormChange}/>
                                <input name="address" placeholder="Адрес (если доставка):" className="delivery" value={formData.address} onChange={handleFormChange}/>
                            </div>
                        </form>
                        <div className="money">
                            <Image src="/makeOrder/Coin.svg" alt="/" width="106" height="106"/>
                            <p>Наличными при получении<br/>(или картой онлайн)</p>
                        </div>
                        <div className="card">
                            <Image src="/makeOrder/Credit Card.svg" alt="/" width="148" height="122"/>
                            <p>Наличными при получении<br/>(или картой онлайн)</p>
                        </div>
                        <div className="name">
                            <p>ФЛП: Вася Пупкин Пупкович</p>
                            <p>ИНН:2772282834</p>
                            <p>78347827458274387572742897ФЕ “ПСБ”</p>
                        </div>
                    </div>
                    <div className="rightPart">
                        <CartItems />
                    </div>
                </div>
                <div className="bottomPart">
                    <div className="checkbox">
                        <input type="checkbox" checked={agreement} onChange={handleCheckboxChange}/>
                        <p>Я ознакомлен с условиями доставки и оплаты, а также согласен с условиями использования моих персональных данных</p>
                    </div>
                    <div className="button">
                        <button type="button" onClick={handleOrderSubmit}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
