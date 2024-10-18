import React from 'react'
import './furnitureForOrder.scss'
import dynamic from "next/dynamic";
import Link from "next/link";

const Carousel = dynamic(() => import('../../Components/Carousel'), { ssr: false })



export default function Page() {
    return (
        <>
            <div className="pagination">
                <p><Link href="/mainPage">Главная/</Link>Мебель на заказ</p>
            </div>
            <div className="carousel-container">
                <Carousel></Carousel>
            </div>
            <div id={"furnitureForOrder"}>
                <div className="Order">
                    <h1>Заказать мебель</h1>
                    <form>
                        <input placeholder="Имя:"/>
                        <input placeholder="Телефон:"/>
                        <textarea className="comment" placeholder="Комментарий:"/>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>

        </>
    )
}
