"use client";
import React, { useState } from 'react';

import './SearchProducts.scss';
import { BASE_URL } from "../config";
import Link from "next/link";

export default function SearchProducts() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    function clear() {
        setQuery('');
        setProducts([]);
    }

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value === "") {
            setProducts([]);
        }
        if (e.target.value !== '') {
            let query = e.target.value;
            const res = await fetch(`${BASE_URL}/api/v1/catalog/search?query=${query}`, { next: { revalidate: 3600 } });
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
    };

    return (
        <div className="search-products"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <input
                className="search"
                placeholder="Поиск товаров"
                type="text"
                value={query}
                onChange={(e) => handleSearch(e)}
            />

            {products.length > 0 && query.length !== 0 && isHovered ? (
                <ul className="founded-products">
                    {products && products.map((product) => (
                        <li key={product.id}>
                            <Link onClick={clear} href={`/catalog/products/${product.slug}`}>
                                {product.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
