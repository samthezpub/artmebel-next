"use client"

import React, {useState} from 'react'
import {BASE_URL} from "../../config";
import Link from "next/link";

async function getSuperCategories() {
    return await fetch(`${BASE_URL}/api/v1/supercategory/getAll`).then(res => res.json());
}

export default function CategoriesContainer() {
    const [superCategories, setSuperCategories] = useState([]);
    const [activeSuperCategory, setActiveSuperCategory] = useState(null);

    React.useEffect(() => {
        async function fetchData() {
            const superCategoriesData = await getSuperCategories();
            setSuperCategories(superCategoriesData);
            setActiveSuperCategory(superCategoriesData[0]); // Устанавливаем первую суперкатегорию как активную
        }
        fetchData();
    }, []);

    const handleSuperCategoryClick = (category) => {
        setActiveSuperCategory(category); // Обновляем активную суперкатегорию при клике
    };

    return (
        <div className="categories_container">
            <div className="categories">
                <ul>
                    {superCategories.map(category => (
                        <li key={category.id}>
                            <div className="supercategory" onClick={() => handleSuperCategoryClick(category)}>
                                <span>{category.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {activeSuperCategory && (
                <div className="subcategories-container">
                    <div className="subcategories">
                        {activeSuperCategory.categories.map(category => (
                            <div className="subcategory" key={category.id}>
                                <Link href={`/catalog/${category.slug}`}>
                                    <h2>{category.name}</h2>
                                </Link>
                                <ul>
                                    {category.subCategories.map(subCategory => (
                                        <li key={subCategory.id}>
                                            <Link href={`/catalog/${subCategory.slug}`}>
                                                <span>{subCategory.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
