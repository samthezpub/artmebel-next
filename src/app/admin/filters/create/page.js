"use client";

import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../config";

import './filtersCreate.scss'

export default function Page() {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [formData, setFormData] = useState({ filterType: "", category_id: null });

    // Функция для получения категорий
    async function getCategories() {
        return await fetch(`${BASE_URL}/api/v1/category/get-all`, { method: "GET" })
            .then((res) => res.json());
    }

    useEffect(() => {
        async function fetchCategories() {
            try {
                const categories = await getCategories();
                setCategories(categories);

                // Устанавливаем начальную категорию и обновляем formData
                if (categories.length > 0) {
                    setSelectedCategoryId(categories[0].id);
                    setFormData((prev) => ({ ...prev, category_id: categories[0].id }));
                }
            } catch (error) {
                console.error("Ошибка при загрузке категорий:", error);
            }
        }

        fetchCategories();
    }, []);

    // Обработчик смены категории
    const handleCategoryChange = (event) => {
        const selectedId = parseInt(event.target.value, 10); // Парсинг как число
        setSelectedCategoryId(selectedId);
        setFormData((prev) => ({ ...prev, category_id: selectedId }));
    };

    // Обработчик для изменения поля фильтра
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Обработчик отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Проверка данных перед отправкой
        console.log("Отправляемые данные:", formData);

        try {
            const response = await fetch(`http://localhost:8080/api/v1/filters/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Фильтр успешно добавлен!");
            } else {
                alert("Ошибка при добавлении фильтра");
            }
        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
        }
    };

    return (
        <div id="filterCreate">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Название фильтра"
                    name="filterType"
                    value={formData.filterType}
                    onChange={handleInputChange}
                />

                <select
                    name="category_id"
                    id="category"
                    onChange={handleCategoryChange}
                    value={selectedCategoryId || ""}
                >
                    {categories && categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <button type="submit">Добавить фильтр</button>
            </form>
        </div>
    );
}
