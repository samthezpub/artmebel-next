import React from 'react'

import Link from 'next/link'

import './Catalog.scss';

import {BASE_URL} from "../../config";
import CategoriesContainer from "./CategoriesContainer";




export default async function Page() {


    return (
        <div className="catalog">
            <div className="container">
                <div className="pagination">
                <p><Link href="/">Главная/</Link><span className="active">Каталог</span></p>
                </div>
                <div className="header">
                    <h1>Каталог</h1>
                </div>

                <CategoriesContainer></CategoriesContainer>

            </div>
        </div>
    )
}
