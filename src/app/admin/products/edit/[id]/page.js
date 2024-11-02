"use client";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../../config";
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
        category: "",
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
            const response = await fetch(`http://localhost:8080/api/v1/catalog/update/${productId}`, {
                method: "PUT",
                body: data
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
                    category: product.category.id,
                    slug: product.slug,
                    file: null,
                    filters: product.filters || {}
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

                <select name="category" id="category" onChange={handleCategoryChange} value={selectedCategoryId || ""} className="select">
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>

                {filters.map(filter => (
                    <div key={filter.id} className="filter">
                        <label>{filter.filterType}</label>
                        <select name={filter.filterType} onChange={(e) => handleFilterChange(filter.filterType, e.target.value)} className="filterSelect" value={formData.filters[filter.filterType] || ""}>
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
