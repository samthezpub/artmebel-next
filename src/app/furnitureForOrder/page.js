import React from 'react'
import './furnitureForOrder.scss'


export default function Page() {
    return (
        <>
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
