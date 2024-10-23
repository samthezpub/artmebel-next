"use client"

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import './orders.scss';

async function getOrders() {
    const res = await fetch("http://localhost:8080/api/v1/orders/getAll");
    if (!res.ok) {
        throw new Error("Ошибка при получении данных");
    }
    const result = await res.json();
    return result;
}

async function deleteOrder(id) {
    const res = await fetch(`http://localhost:8080/api/v1/orders/delete/${id}`, {
        method: 'POST',
    });
    if (!res.ok) {
        throw new Error("Ошибка при удалении заказа");
    }
}

const translateStatus = (status) => {
    switch (status) {
        case "IN_PROGRESS":
            return "В процессе";
        case "COMPLETED":
            return "Полностью готов";
        case "FROZEN":
            return "Заморожен";
        case "PACKING":
            return "Упаковывается";
        default:
            return status;
    }
}

const getStatusClass = (status) => {
    switch (status) {
        case "IN_PROGRESS":
            return "status-in-progress";
        case "COMPLETED":
            return "status-completed";
        case "FROZEN":
            return "status-frozen";
        case "PACKING":
            return "status-packing";
        default:
            return "";
    }
}

export default function Page() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const result = await getOrders();
                setOrders(result);
            } catch (error) {
                console.error("Ошибка загрузки заказов:", error);
            }
        };
        fetchOrders();
    }, []);

    const handleDeleteOrder = async (id) => {
        try {
            await deleteOrder(id);
            setOrders(orders.filter(order => order.id !== id)); // Обновляем список заказов
        } catch (error) {
            console.error("Ошибка при удалении заказа:", error);
        }
    };

    return (
        <section id="orders">
            <div className="container">
                {orders && orders.length > 0 ? orders.map(order => (
                    <div key={order.id} className="order">
                        <div className="info">
                            <div className="id">
                                <h1>Номер: {order.id}</h1>
                            </div>
                            <div className="price">
                                <h1>Цена: {order.price}</h1>
                            </div>
                            <div className="date">
                                <h1>Дата: {order.dateOfOrderAcceptance}</h1>
                            </div>
                            <div className={`status ${getStatusClass(order.status)}`}>
                                <h1>{translateStatus(order.status)}</h1>
                            </div>
                            <div className="icon">
                                <button className="bucket" onClick={() => handleDeleteOrder(order.id)}>
                                    <Image src="/admin/bucket.png" alt="delete" width="40" height="40"/>
                                </button>
                                <Link className="edit" href={`/admin/orders/editOrder/${order.id}`}>
                                    <Image src="/admin/edit.png" alt="edit" width="40" height="40"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                )) : (
                    <p>Заказы не найдены</p>
                )}

                <div className="ForAddition">
                    <Link href="/admin/orders/createOrder">
                        <Image src="/admin/add.png" alt="add" width="50" height="50"/>
                    </Link>
                </div>
            </div>
        </section>
    );
}
