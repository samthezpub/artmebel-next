"use client"

import React, {useState} from 'react'
import OrderTable from './OrderTable'
import './OrderForm.scss'


export default function OrderForm() {

    const [id, setId] = useState()

    function onChange(e){
        setId(e.target.value)
        console.log(e.target.value)
    }

    const [product, setProduct] = useState()
    const [error, setError] = useState(null)

    async function onSubmit(e){
        e.preventDefault()
        let result ;
       await fetch(`https://samthezpub-mebelshik-1b40.twc1.net/api/v1/orders/get/${id}`).then(async res => {
            result = await res.json()
           setProduct(result)
           setError(null)
        }).catch(error => {setError(error)
        console.log(error)
        })
        console.log(result)

    }

    return (

        <div className="containerForm">
        <form onSubmit={onSubmit}>
            <input onChange={onChange} placeholder="Номер заказа" />
            <button type={"submit"} >Отправить</button>
        </form>
            <div>
                <OrderTable product={product} error={error}/>
            </div>
        </div>

    )
}
