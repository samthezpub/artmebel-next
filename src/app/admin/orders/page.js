"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import './orders.scss';
import { BASE_URL } from "../../../config";

async function getOrders() {
    const res = await fetch(`${BASE_URL}/api/v1/orders/getAll`);
    if (!res.ok) {
        throw new Error("Ошибка при получении данных");
    }
    const result = await res.json();
    return result;
}

async function deleteOrder(id) {
    const res = await fetch(`${BASE_URL}/api/v1/orders/delete/${id}`, {
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
    const [sortOrder, setSortOrder] = useState("id"); // По умолчанию сортируем по ID
    const [statusFilter, setStatusFilter] = useState(""); // Фильтр по статусу

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

    // Функция для сортировки заказов
    const sortOrders = (orders, type) => {
        if (type === "id") {
            return [...orders].sort((a, b) => a.id - b.id);
        } else if (type === "date") {
            return [...orders].sort((a, b) => new Date(b.dateOfOrderAcceptance) - new Date(a.dateOfOrderAcceptance));
        }
        return orders;
    };

    const handleSort = (type) => {
        setSortOrder(type);
    };

    const handleDeleteOrder = async (id) => {
        try {
            await deleteOrder(id);
            setOrders(orders.filter(order => order.id !== id)); // Обновляем список заказов
        } catch (error) {
            console.error("Ошибка при удалении заказа:", error);
        }
    };

    // Фильтрация по статусу
    const filterOrdersByStatus = (orders, status) => {
        if (status === "") return orders; // Если статус не выбран, возвращаем все заказы
        return orders.filter(order => order.status === status);
    };

    const sortedOrders = sortOrders(orders, sortOrder); // Применяем сортировку
    const filteredOrders = filterOrdersByStatus(sortedOrders, statusFilter); // Применяем фильтрацию по статусу

    return (
        <section id="orders">
            {/* Кнопки для сортировки */}
            <div className="sort-buttons">
                <button onClick={() => handleSort('id')} className={sortOrder === 'id' ? 'active' : ''}>
                    Сортировка по ID
                </button>
                <button onClick={() => handleSort('date')} className={sortOrder === 'date' ? 'active' : ''}>
                    Сортировка по дате
                </button>
            </div>

            {/* Фильтр по статусу */}
            <div className="filter-status">
                <label htmlFor="statusFilter">Фильтр по статусу: </label>
                <select
                    id="statusFilter"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">Все статусы</option>
                    <option value="IN_PROGRESS">В процессе</option>
                    <option value="COMPLETED">Полностью готов</option>
                    <option value="FROZEN">Заморожен</option>
                    <option value="PACKING">Упаковывается</option>
                </select>
            </div>

            <div className="container">
                {filteredOrders && filteredOrders.length > 0 ? filteredOrders.map(order => (
                    <div key={order.id} className="order">
                        <div className="info">
                            <div className="id">
                                <h1>Номер: {order.id}</h1>
                            </div>
                            <div className="price">
                                <h1>Цена: {order.price}</h1>
                            </div>
                            <div className="date">
                                <h1>Дата: {new Date(order.dateOfOrderAcceptance).toLocaleDateString()}</h1>
                            </div>
                            <div className={`status ${getStatusClass(order.status)}`}>
                                <h1>{translateStatus(order.status)}</h1>
                            </div>
                            <div className="icon">
                                <button className="bucket" onClick={() => handleDeleteOrder(order.id)}>
                                    <Image src="/admin/bucket.png" alt="delete" width="40" height="40" />
                                </button>
                                <Link className="edit" href={`/admin/orders/editOrder/${order.id}`}>
                                    <Image src="/admin/edit.png" alt="edit" width="40" height="40" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )) : (
                    <p>Заказы не найдены</p>
                )}

                <div className="ForAddition">
                    <Link href="/admin/orders/createOrder">
                        <Image src="/admin/add.png" alt="add" width="50" height="50" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
