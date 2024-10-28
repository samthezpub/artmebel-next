"use client";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../config";

export default function Page() {
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        title: "",
        category: "",
        file: null,
        filters: {}
    });

    // Функция для получения категорий
    async function getCategories() {
        return await fetch(`${BASE_URL}/api/v1/category/get-all`, { method: "GET" }).then(res => res.json());
    }

    // Функция для отправки формы
    async function submitForm(event) {
        event.preventDefault(); // предотвращает перезагрузку страницы

        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("price", formData.price);
        data.append("title", formData.title);
        data.append("category", formData.category);
        if (formData.file) {
            for (let i = 0; i < formData.file.length; i++) {
                data.append("file", formData.file[i]);
            }
        }
        // Добавляем фильтры
        Object.entries(formData.filters).forEach(([key, value]) => {
            data.append(`filters[${key}]`, value);
        });

        try {
            const response = await fetch(`http://localhost:8080/api/v1/catalog/create`, {
                method: "POST",
                body: data
            });

            if (!response.ok) {
                throw new Error("Ошибка при отправке формы");
            }

            alert("Продукт успешно создан!");
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Ошибка при создании продукта");
        }
    }

    useEffect(() => {
        async function fetchCategories() {
            try {
                const categories = await getCategories();
                setCategories(categories);

                // Устанавливаем начальные фильтры первой категории
                if (categories.length > 0) {
                    setSelectedCategoryId(categories[0].id);
                    setFilters(categories[0].filters);
                    setFormData((prev) => ({ ...prev, category: categories[0].id }));
                }
            } catch (error) {
                console.error("Ошибка при загрузке категорий:", error);
            }
        }

        fetchCategories();
    }, []);

    // Обработчик смены категории
    const handleCategoryChange = (event) => {
        const selectedId = parseInt(event.target.value);
        setSelectedCategoryId(selectedId);

        // Находим выбранную категорию и устанавливаем её фильтры
        const selectedCategory = categories.find(category => category.id === selectedId);
        setFilters(selectedCategory ? selectedCategory.filters : []);
        setFormData((prev) => ({ ...prev, category: selectedId }));
    };

    // Обработчик изменения значений формы
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (event) => {
        setFormData((prev) => ({ ...prev, file: event.target.files }));
    };

    const handleFilterChange = (filterType, value) => {
        setFormData((prev) => ({
            ...prev,
            filters: { ...prev.filters, [filterType]: value }
        }));
    };

    return (
        <div id={"productCreate"}>
            <form onSubmit={submitForm}>
                <input type="text" name="name" placeholder="Название продукта" value={formData.name} onChange={handleChange} />
                <input type="text" name="description" placeholder="Описание" value={formData.description} onChange={handleChange} />
                <input type="number" name="price" placeholder="Цена" value={formData.price} onChange={handleChange} />
                <input type="text" name="title" placeholder="Название SEO" value={formData.title} onChange={handleChange} disabled={true} />
                <input type="file" multiple={true} placeholder="Выбрать фото" name="file" accept="image/png, image/jpeg" onChange={handleFileChange} />

                <select name="category" id="category" onChange={handleCategoryChange} value={selectedCategoryId || ""}>
                    {categories && categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>

                {filters.map(filter => (
                    <div key={filter.id}>
                        <label>{filter.filterType}</label>
                        <select name={filter.filterType} onChange={(e) => handleFilterChange(filter.filterType, e.target.value)}>
                            {filter.values.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>
                    </div>
                ))}

                <button type="submit">Создать</button>
            </form>
        </div>
    );
}
