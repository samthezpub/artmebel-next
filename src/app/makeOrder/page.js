import React from 'react'
import MakeOrderComp from "./makeOrderComp";

export const metadata = {
    title: 'Корзина в интернет-магазине "ArtMebel"',
    description: 'Ваша корзина в интернет магазине ArtMebel в Мариуполе',
    keywords: ''
}

export default function Page() {
    return (
        <>
            <MakeOrderComp />
        </>
    )
}
