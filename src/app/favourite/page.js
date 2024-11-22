import React from 'react'
import './/favourite.scss'
import FavouriteItems from "../../Components/FavouriteItems";

export const metadata = {
    title: 'Избранные товары в интернет-магазине "ArtMebel"',
    description: 'Ваши избранные товары в интернет-магазине ArtMebel в Мариуполе.',
    keywords: ''
}

export default function Page() {
    return (
        <>
        <div id="favourite">
            <div className="container">
            <div className="header">
                <h1>Избранное</h1>
            </div>
             <div className="containerForProduct">
                 <FavouriteItems></FavouriteItems>
             </div>
            </div>
        </div>
        </>
    )
}
