"use client";

import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../../config";
import './filterUpdate.scss';

export default function Page({ filterId }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [formData, setFormData] = useState({ filterType: "", category_id: null, values: [""] });
    const [loading, setLoading] = useState(true);

    // Функция для получения категорий
    async function getCategories() {
        return await fetch(`${BASE_URL}/api/v1/category/get-all`, { method: "GET" })
            .then((res) => res.json());
    }

    // Функция для получения фильтра по ID
    async function getFilterById(id) {
        return await fetch(`${BASE_URL}/api/v1/filters/get/${id}`, { method: "GET" })
            .then((res) => res.json());
    }

    useEffect(() => {
        async function fetchData() {
            try {
                // Получаем категории
                const categoriesData = await getCategories();
                setCategories(categoriesData || []);

                // Получаем данные фильтра для редактирования
                const filterData = await getFilterById(filterId);

                // Устанавливаем formData с полученными значениями
                setFormData({
                    filterType: filterData.filterType || "",
                    category_id: filterData.category_id || null,
                    values: filterData.values || [""]
                });
                setSelectedCategoryId(filterData.category_id);

                setLoading(false);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
                setLoading(false);
            }
        }

        fetchData();
    }, [filterId]);

    const handleCategoryChange = (event) => {
        const selectedId = parseInt(event.target.value, 10);
        setSelectedCategoryId(selectedId);
        setFormData((prev) => ({ ...prev, category_id: selectedId }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleValueChange = (index, value) => {
        const updatedValues = [...formData.values];
        updatedValues[index] = value;
        setFormData((prev) => ({ ...prev, values: updatedValues }));
    };

    const addValueField = () => {
        setFormData((prev) => ({ ...prev, values: [...prev.values, ""] }));
    };

    const removeValueField = (index) => {
        const updatedValues = formData.values.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, values: updatedValues }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/api/v1/filters/update/${filterId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Фильтр успешно обновлен!");
            } else {
                alert("Ошибка при обновлении фильтра");
            }
        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
        }
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <div id="filterUpdate">
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
                    {categories.map((category) => (
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

                <button type="submit">Обновить фильтр</button>
            </form>
        </div>
    );
}
