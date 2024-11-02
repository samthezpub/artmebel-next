"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductList() {
    const [products, setProducts] = useState([]); // Установим начальное значение пустым массивом

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/catalog/get-all")
            .then((res) => res.json()) // Преобразуем ответ в JSON
            .then((data) => {
                setProducts(data); // Устанавливаем данные в состояние
            })
            .catch((error) => {
                console.error("Ошибка при получении данных:", error); // Логируем ошибку
            });
    }, []);

    return (
        <div>
            <div id="admin">
                <div className="container">
                    {products.length > 0 ? (

                        <table className="productTable">
                            <thead>
                            <tr>
                                <th>Изображение</th>
                                <th>Название</th>
                                <th>Категория</th>
                                <th>Цена</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td><Image src={`https://d2197f97-art-mebel.s3.timeweb.cloud/${product.slug}_1.jpg`} alt={product.name} width="50" height="50"/>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.category?.name}</td>
                                    <td>{product.price} ₽</td>
                                    <td>
                                        <Link href={`/admin/products/edit/${product.id}`}>✏️</Link>
                                        <Link href={`/admin/products/delete/${product.id}`}>🗑️</Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    ) : (
                        <p>Загрузка продуктов...</p>
                    )}

                    <div className="ForAddition">
                        <Link href="/admin/products/create">
                            <Image src="/admin/add.png" alt="add" width="114" height="114"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
