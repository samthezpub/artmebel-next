"use client";
import React, { useEffect, useState } from 'react';
import './createOrder.scss';
import Link from "next/link";
import {BASE_URL} from "../../../../../config";

export default function Page({ params }) {
    const [order, setOrder] = useState(null);
    const [Success, setSuccess] = useState(false);
    const [Error, setError] = useState(null);
    const id = params.id; // Исправлено извлечение id

    useEffect(() => {
        const fetchOrder = async () => {
            if (id) {
                try {
                    const res = await fetch(`${BASE_URL}/api/v1/orders/get/${id}`);
                    if (res.ok) {
                        const data = await res.json();
                        setOrder(data);
                    } else {
                        setError("Ошибка при загрузке заказа");
                    }
                } catch (error) {
                    setError("Произошла ошибка при выполнении запроса");
                }
            } else {
                setError("ID заказа не найден");
            }
        };

        fetchOrder();
    }, [id]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!order) return;

        const updatedOrder = {
            ...order,
            price: document.getElementById("price").value,
            status: document.getElementById("status").value,
            dateOfOrderAcceptance: document.getElementById("dateOfOrderAcceptance").value,
        };

        // Валидация на пустые поля
        if (!updatedOrder.price || !updatedOrder.dateOfOrderAcceptance) {
            setError("Все поля должны быть заполнены!");
            setSuccess(false);
            return;
        }

        try {
            const res = await fetch(`${BASE_URL}/api/v1/orders/update`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(updatedOrder)
            });

            if (res.ok) {
                setSuccess(true);
                setError(null);
                setTimeout(() => {
                    window.location.href = '/admin/orders';
                }, 1000);
            } else {
                setError("Произошла ошибка при обновлении заказа");
                setSuccess(false);
            }
        } catch (err) {
            setError("Произошла ошибка при обновлении заказа");
            setSuccess(false);
        }
    };

    if (!order) {
        return <p>Загрузка заказа...</p>;
    }

    return (
        <div id="createOrder">
            <Link className="back" href="/admin/orders">Вернуться к заказам</Link>
            <form onSubmit={onSubmit} className="order-form">
                <div className="form-group">
                    <label htmlFor="price">Сумма:</label>
                    <input type="text" name="price" id="price" defaultValue={order.price} placeholder="Введите сумму" />
                </div>

                <div className="form-group">
                    <label htmlFor="status">Статус заказа:</label>
                    <select name="status" id="status" defaultValue={order.status}>
                        <option value="PACKING">УПАКОВЫВАЕТСЯ</option>
                        <option value="IN_PROGRESS">В ПРОЦЕССЕ</option>
                        <option value="COMPLETED">ПОЛНОСТЬЮ ГОТОВ</option>
                        <option value="FROZEN">ЗАМОРОЖЕН</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="dateOfOrderAcceptance">Дата принятия заказа:</label>
                    <input type="date" id="dateOfOrderAcceptance" name="dateOfOrderAcceptance" defaultValue={order.dateOfOrderAcceptance.split('T')[0]} />
                </div>

                <button type="submit" className="submit-btn">Обновить</button>
            </form>
            {Success && <p className="ok-message">Заказ успешно обновлен!</p>}
            {Error && <p className="error-message">{Error}</p>}
        </div>
    );
}
