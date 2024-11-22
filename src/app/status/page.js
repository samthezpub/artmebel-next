import React from 'react'
import './status.scss'
import Link from "next/link";
import OrderForm from './OrderForm'

export const metadata = {
    title: 'Статус заказа в интернет-магазине "ArtMebel"',
    description: 'Статус заказа мебели в интернет магазине ArtMebel в Мариуполе по низким ценам.',
    keywords: ''
}

export default function Page() {
    return (
       <>
           <div id="status">
               <div className="container">
               <div className="pagination">
                   <p><Link href="/">Главная/</Link><span>Статус заказа</span> </p>
               </div>
                   <div className="header">
                       <h1>Статус заказа</h1>
                   </div>
                    <div>
                        <OrderForm/>
                    </div>
               </div>
           </div>
       </>
    )
}
