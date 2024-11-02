import React from 'react'
import './status.scss'
import Link from "next/link";
import OrderForm from './OrderForm'


export default function Page() {
    return (
       <>
           <div id="status">
               <div className="container">
               <div className="pagination">
                   <p><Link href="/">Главная/</Link><span>Статус производственного заказа</span> </p>
               </div>
                   <div className="header">
                       <h1>Статус производственного заказа</h1>
                   </div>
                    <div>
                        <OrderForm/>
                    </div>
               </div>
           </div>
       </>
    )
}
