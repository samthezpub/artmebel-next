"use client";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../config";
import "./Create.scss"; // Подключаем обычный SCSS файл без модулей

export default function EditPage({params}) {
    const  productId  = params.id;

    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        title: "",
        categoryId: "",
        slug: "",
        file: null,
        filters: {}
    });
    const [previewImages, setPreviewImages] = useState([]);

    async function getCategories() {
        return await fetch(`${BASE_URL}/api/v1/category/get-all`, { method: "GET" }).then(res => res.json());
    }

    async function getProductDetails() {
        const response = await fetch(`${BASE_URL}/api/v1/catalog/getById/${productId}`, { method: "GET" });
        return await response.json();
    }

    async function updateForm(event) {
        event.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("price", formData.price);
        data.append("title", formData.title);
        data.append("categoryId", formData.categoryId);  // Убедимся, что здесь обновленный categoryId
        data.append("slug", formData.slug);

        if (formData.file) {
            for (let i = 0; i < formData.file.length; i++) {
                data.append("file", formData.file[i]);
            }
        }
        data.append("filters", JSON.stringify(formData.filters));

        console.log("Updated data before submission:", {
            ...formData,
            categoryId: formData.categoryId,
        });

        try {
            const response = await fetch(`${BASE_URL}/api/v1/catalog/update/${productId}`, {
                method: "PUT",
                body: data,
            });

            if (!response.ok) {
                throw new Error("Ошибка при обновлении продукта");
            }

            alert("Продукт успешно обновлен!");
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Ошибка при обновлении продукта");
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const categories = await getCategories();
                setCategories(categories);

                const product = await getProductDetails();
                setFormData({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    title: product.title,
                    categoryId: product.category.id,
                    slug: product.slug,
                    file: null,
                    filters: {}
                });
                setPreviewImages(product.images || []);

                if (categories.length > 0) {
                    setSelectedCategoryId(product.category.id);
                    setFilters(categories.find(cat => cat.id === product.category.id)?.filters || []);
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        }

        fetchData();
    }, [productId]);

    const handleCategoryChange = (event) => {
        const selectedId = parseInt(event.target.value);
        setSelectedCategoryId(selectedId);
        setFormData((prev) => ({ ...prev, categoryId: selectedId }));

        const selectedCategory = categories.find(category => category.id === selectedId);
        setFilters(selectedCategory ? selectedCategory.filters : []);
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

    const handleFilterChange = (filterId, value) => {
        // Создаем новый объект filters на основе существующего, изменяя только выбранный filterId
        setFormData((prev) => ({
            ...prev,
            filters: {
                ...prev.filters, // Сохраняем остальные фильтры
                [filterId]: value // Обновляем только значение выбранного фильтра
            }
        }));
    };

    return (
        <div id="productEdit" className="productEdit">
            <form onSubmit={updateForm} className="form">
                <input type="text" name="name" placeholder="Название продукта" value={formData.name} onChange={handleChange} className="input" />
                <textarea name="description" placeholder="Описание" value={formData.description} onChange={handleChange} className="textarea" />
                <input type="number" name="price" placeholder="Цена" value={formData.price} onChange={handleChange} className="input" />
                <input type="file" multiple name="file" accept="image/png, image/jpeg" onChange={handleFileChange} className="fileInput" />

                <div className="imagePreviewContainer">
                    {previewImages.map((image, index) => (
                        <img key={index} src={image} alt={`preview-${index}`} className="imagePreview" />
                    ))}
                </div>

                <select name="categoryId" id="categoryId" onChange={handleCategoryChange} value={selectedCategoryId || ""} className="select">
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>

                {filters.map(filter => (
                    <div key={filter.id} className="filter">
                        <label>{filter.filterType}</label>
                        <select
                            onChange={(e) => handleFilterChange(filter.id, e.target.value)} // filter.id здесь
                            className="filterSelect"
                            value={formData.filters[filter.id] || ""}
                        >
                            {filter.values.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>
                    </div>
                ))}

                <button type="submit" className="submitButton">Обновить</button>
            </form>
        </div>
    );
}
