"use client"
import React, {useState} from 'react'

import './SearchProducts.scss'

export default function SearchProducts() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value === "") {
            setProducts([]);
        }
        if (e.target.value != '') {

            let query = e.target.value;
            const res = await fetch(`http://localhost:8080/api/v1/catalog/search?query=${query}`);
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
    };

    return (
        <div className="search-products">
            <input className="search" placeholder="Поиск товаров" type="text"
                   value={query}
                   onChange={(e) => handleSearch(e)}/>

            {products.length > 0 && query.length !=0 ? (
                <ul className="founded-products">
                    {products && products.map((product) => (<li key={product.id}>{product.name}</li>))}
                </ul>
            ):(null)}

        </div>
    )
}
