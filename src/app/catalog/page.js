import React from 'react'

import Link from 'next/link'

import './Catalog.scss';

import {BASE_URL} from "../../../config";
import CategoriesContainer from "./CategoriesContainer";

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

                <CategoriesContainer></CategoriesContainer>

            </div>
        </div>
    )
}
