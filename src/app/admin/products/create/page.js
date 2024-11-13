"use client";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../config";
import "./Create.scss"; // Подключаем обычный SCSS файл без модулей

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
        slug: "",
        file: null,
        filters: {}
    });
    const [previewImages, setPreviewImages] = useState([]);

    async function getCategories() {
        return await fetch(`${BASE_URL}/api/v1/category/get-all`, { method: "GET" }).then(res => res.json());
    }

    async function submitForm(event) {
        event.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("price", formData.price);
        data.append("title", formData.name + " | ArtMebel");
        data.append("category", formData.category);
        data.append("slug", formData.slug);

        if (formData.file) {
            for (let i = 0; i < formData.file.length; i++) {
                data.append("file", formData.file[i]);
            }
        }
        Object.entries(formData.filters).forEach(([key, value]) => {
            data.append(`filters[${key}]`, value);
        });

        try {
            const response = await fetch(`${BASE_URL}/api/v1/catalog/create`, {
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

    const handleCategoryChange = (event) => {
        const selectedId = parseInt(event.target.value);
        setSelectedCategoryId(selectedId);

        const selectedCategory = categories.find(category => category.id === selectedId);
        setFilters(selectedCategory ? selectedCategory.filters : []);
        setFormData((prev) => ({ ...prev, category: selectedId }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        setFormData((prev) => ({ ...prev, file: files }));

        const previews = Array.from(files).map(file => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    const handleFilterChange = (filterType, value) => {
        setFormData((prev) => ({
            ...prev,
            filters: { ...prev.filters, [filterType]: value }
        }));
    };

    return (
        <div id="productCreate" className="productCreate">
            <form onSubmit={submitForm} className="form">
                <input type="text" name="name" placeholder="Название продукта" value={formData.name} onChange={handleChange} className="input" />
                <textarea name="description" placeholder="Описание" value={formData.description} onChange={handleChange} className="textarea" />
                <input type="number" name="price" placeholder="Цена" value={formData.price} onChange={handleChange} className="input" />
                <input type="file" multiple name="file" accept="image/png, image/jpeg" onChange={handleFileChange} className="fileInput" />

                <div className="imagePreviewContainer">
                    {previewImages.map((image, index) => (
                        <img key={index} src={image} alt={`preview-${index}`} className="imagePreview" />
                    ))}
                </div>

                <select name="category" id="category" onChange={handleCategoryChange} value={selectedCategoryId || ""} className="select">
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>

                {filters.map(filter => (
                    <div key={filter.id} className="filter">
                        <label>{filter.filterType}</label>
                        <select name={filter.filterType} onChange={(e) => handleFilterChange(filter.filterType, e.target.value)} className="filterSelect">
                            {filter.values.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>
                    </div>
                ))}

                <button type="submit" className="submitButton">Создать</button>
            </form>
        </div>
    );
}
