"use client";

import Image from "next/image";
import {useState, useEffect} from "react";
import FiltersComponent from "./FiltersComponent";
import ProductImageSlider from "../Components/ProductImageSlider";
import Link from "next/link";

function sortProducts(products, sortType) {
    if (sortType === "priceAsc") {
        return [...products].sort((a, b) => a.price - b.price);
    } else if (sortType === "priceDesc") {
        return [...products].sort((a, b) => b.price - a.price);
    } else if (sortType === "nameAsc") {
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else {
        return products; // Без сортировки
    }
}

const SortingAndFilteringComponent = ({initialProducts, filters}) => {
    const [products, setProducts] = useState(initialProducts);
    const [sortType, setSortType] = useState("default");
    const [activeFilters, setActiveFilters] = useState([]);

    const addToCart = (productId) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (!Array.isArray(cart)) {
            cart = [];
        }

        if (!cart.includes(productId)) {
            cart.push(productId);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`Товар добавлен в корзину!`);
        } else {
            alert(`Товар уже в корзине.`);
        }
    };

    const addToFavorite = (productId) => {
        let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
        if (!Array.isArray(favorite)) {
            favorite = [];
        }

        if (!favorite.includes(productId)) {
            favorite.push(productId);
            localStorage.setItem("favorite", JSON.stringify(favorite));
            alert(`Товар добавлен в избранное!`);
        } else {
            alert(`Товар уже в избранном.`);
        }
    };

    const handleSortChange = (e) => {
        const selectedSortType = e.target.value;
        setSortType(selectedSortType);
        setProducts(sortProducts(products, selectedSortType));
    };

    const handleFilterChange = (filterId, value) => {
        const updatedFilters = activeFilters.filter((filter) => filter.filterId !== filterId);

        if (value) {
            updatedFilters.push({filterId, value});
        }

        setActiveFilters(updatedFilters);

        const filteredProducts = initialProducts.filter((product) => {
            return updatedFilters.every((filter) => {
                console.log(filter)
                console.log(product)
                return product.productFilters.some(
                    (productFilter) =>
                        productFilter.filter.id === filter.filterId &&
                        productFilter.value === filter.value
                );
            });
        });

        setProducts(filteredProducts);
    };

    useEffect(() => {
        console.log(initialProducts)
    }, []);

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

            <FiltersComponent filters={filters} onFilterChange={handleFilterChange}/>

            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="heart-container" onClick={() => addToFavorite(product.id)}>
                            <Image className="heart-outline" src={"/catalog/categorySlug/like.svg"}
                                   alt={"Добавить в избранное"} width={40} height={40}/>
                            <Image className="like-filled" src={"/catalog/categorySlug/like-fill.svg"}
                                   alt={"Добавить в избранное"} width={40} height={40}/>
                        </div>

                        <ProductImageSlider productSlug={product.slug}
                                            imagesCount={product.photosCount}></ProductImageSlider>
                        <Link href={`/catalog/products/${product.slug}`} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <p className="price">{product.price} ₽</p>
                        </Link>
                        <Link href={`/catalog/products/${product.slug}`} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h3 className="name">{product.name}</h3>
                        </Link>
                        <Image className="line" src={"/catalog/categorySlug/line.png"} width={170} height={2}/>
                        <Image className="cart-icon" src={"/catalog/categorySlug/cart.png"} width={36} height={36}
                               onClick={() => addToCart(product.id)}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortingAndFilteringComponent;
