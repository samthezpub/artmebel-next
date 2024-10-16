"use client";

import Image from "next/image";
import { useState } from "react";
import FiltersComponent from "./FiltersComponent";

// Функция для сортировки товаров
function sortProducts(products, sortType) {
    if (sortType === "priceAsc") {
        return [...products].sort((a, b) => a.price - b.price);
    } else if (sortType === "priceDesc") {
        return [...products].sort((a, b) => b.price - a.price);
    } else if (sortType === "nameAsc") {
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else {
        return products; // По умолчанию возвращаем без сортировки
    }
}

const SortingAndFilteringComponent = ({ initialProducts, filters }) => {
    const [products, setProducts] = useState(initialProducts);
    const [sortType, setSortType] = useState("default");
    const [activeFilters, setActiveFilters] = useState([]); // Состояние для активных фильтров

    // Функция для обработки изменения сортировки
    const handleSortChange = (e) => {
        const selectedSortType = e.target.value;
        setSortType(selectedSortType);
        setProducts(sortProducts(products, selectedSortType));
    };

    // Функция для обработки изменения фильтров
    const handleFilterChange = (filterId, value) => {
        const updatedFilters = activeFilters.filter(filter => filter.filterId !== filterId);

        if (value) {
            updatedFilters.push({ filterId, value });
        }

        setActiveFilters(updatedFilters);

        // Обновляем список продуктов в соответствии с активными фильтрами
        const filteredProducts = initialProducts.filter(product => {
            return updatedFilters.every(filter => {
                // Логика фильтрации
                return product.productFilters.some(productFilter =>
                    productFilter.filter.id === filter.filterId &&
                    productFilter.value === filter.value
                );
            });
        });

        setProducts(filteredProducts);
    };

    return (
        <div>
            <div className="sort">
                <label htmlFor="sort">Сортировать по:</label>
                <select id="sort" value={sortType} onChange={handleSortChange}>
                    <option value="default">Без сортировки</option>
                    <option value="priceAsc">по возрастанию цены</option>
                    <option value="priceDesc">по убыванию цены</option>
                    <option value="nameAsc">по названию</option>
                </select>
            </div>

            <FiltersComponent filters={filters} onFilterChange={handleFilterChange} />

            {/* Отображение товаров */}
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="heart-container">
                            <Image className="heart-outline" src={"/catalog/categorySlug/like.svg"}
                                   alt={"Добавить в избранное"} width={40} height={40} />
                            <Image className="like-filled" src={"/catalog/categorySlug/like-fill.svg"}
                                   alt={"Добавить в избранное"} width={40} height={40} />
                        </div>
                        <div className="image-slider">
                            <Image src={"/catalog/categorySlug/tumbaumba.jpg"} width={170} height={183} />
                        </div>
                        <p className="price">{product.price} ₽</p>
                        <h3 className="name">{product.name}</h3>
                        <Image className="line" src={"/catalog/categorySlug/line.png"} width={170} height={2} />
                        <Image className="cart-icon" src={"/catalog/categorySlug/cart.png"} width={36} height={36} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortingAndFilteringComponent;
