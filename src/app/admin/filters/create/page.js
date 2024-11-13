"use client";

import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../config";
import './filtersCreate.scss';

export default function Page() {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [formData, setFormData] = useState({ filterType: "", category_id: null, values: [""] });

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

    // Обработчик для изменения значений фильтра
    const handleValueChange = (index, value) => {
        const updatedValues = [...formData.values];
        updatedValues[index] = value;
        setFormData((prev) => ({ ...prev, values: updatedValues }));
    };

    // Обработчик добавления нового поля для значения фильтра
    const addValueField = () => {
        setFormData((prev) => ({ ...prev, values: [...prev.values, ""] }));
    };

    // Обработчик удаления поля для значения фильтра
    const removeValueField = (index) => {
        const updatedValues = formData.values.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, values: updatedValues }));
    };

    // Обработчик отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Проверка данных перед отправкой
        console.log("Отправляемые данные:", formData);

        try {
            const response = await fetch(`${BASE_URL}/api/v1/filters/create`, {
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

                <div>
                    <h4>Значения фильтра:</h4>
                    {formData.values.map((value, index) => (
                        <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                            <input
                                placeholder={`Значение ${index + 1}`}
                                value={value}
                                onChange={(e) => handleValueChange(index, e.target.value)}
                            />
                            <button type="button" onClick={() => removeValueField(index)}>Удалить</button>
                        </div>
                    ))}
                    <button type="button" onClick={addValueField}>Добавить значение</button>
                </div>

                <button type="submit">Добавить фильтр</button>
            </form>
        </div>
    );
}
