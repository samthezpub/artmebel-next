import React from 'react'

import Link from 'next/link'

import './Catalog.scss';

import {BASE_URL} from "../../../config";

async function getSuperCategories() {
    return await fetch(`${BASE_URL}/api/v1/supercategory/getAll`).then(res => res.json())
}

export default async function Page() {

    let superCategories = await getSuperCategories();

    return (
        <div className="catalog">
            <div className="container">
                <div className="pagination">
                <p><Link href="/mainPage">Главная/</Link>Категории </p>
                </div>
                <div className="header">
                    <h1>Каталог</h1>
                </div>

                <div className="categories_container">
                    <div className="categories">
                        <ul>
                            {superCategories.map(category => (
                                <li>
                                    <Link href="#" key={category.id}>
                                        <span>{category.name}</span>
                                    </Link>
                                </li>
                            ))}


                        </ul>
                    </div>

                    <div className="subcategories-container">
                        <div className="subcategories">
                            {superCategories[0].categories.map(category => (
                                <div className="subcategory">
                                    <Link href={`/catalog/${category.slug}`}>
                                        <h2>{category.name}</h2>
                                    </Link>
                                    <ul>
                                        {category.subCategories.map(subCategory => (
                                            <li>
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
                </div>

            </div>
        </div>
    )
}
