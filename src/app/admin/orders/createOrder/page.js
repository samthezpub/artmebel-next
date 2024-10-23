"use client"
import React, {useState} from 'react'
import './createOrder.scss'
import Link from "next/link";
import {BASE_URL} from "../../../../../config";

export default function Page() {
    const [Success, setSuccess] = useState(false)
    const [Error, setError] = useState(null)

    function onSubmit(e) {
        e.preventDefault();

        let price = document.getElementById("price").value;
        let status = document.getElementById("status").value;
        let dateOfOrderAcceptance = document.getElementById("dateOfOrderAcceptance").value;

        // Валидация на пустые поля
        if (!price || !dateOfOrderAcceptance) {
            setError("Все поля должны быть заполнены!");
            setSuccess(false);
            return;
        }

        fetch(`${BASE_URL}/api/v1/orders/create`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                price: price,
                status: status,
                dateOfOrderAcceptance: dateOfOrderAcceptance
            })
        }).then(
            (res) => {
                if (res.ok) {
                    setSuccess(true)
                    setError(null)

                    setTimeout(() => {
                        window.location.href = '/admin/orders';
                    }, 1000)

                }
            }
        ).catch(err => {
            setError("Произошла ошибка при создании заказа");
            setSuccess(false);
        })


    }

    return (
        <div id="createOrder">
            <Link className="back" href="/admin/orders">Вернуться к заказам</Link>

            <div >
                <form onSubmit={onSubmit} className="order-form">
                    <div className="form-group">
                        <label htmlFor="price">Сумма:</label>
                        <input type="text" name="price" id="price" placeholder="Введите сумму"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Статус заказа:</label>
                        <select name="status" id="status">
                            <option value="PACKING">УПАКОВЫВАЕТСЯ</option>
                            <option value="IN_PROGRESS">В ПРОЦЕССЕ</option>
                            <option value="COMPLETED">ПОЛНОСТЬЮ ГОТОВ</option>
                            <option value="FROZEN">ЗАМОРОЖЕН</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateOfOrderAcceptance">Дата принятия заказа:</label>
                        <input type="date" id="dateOfOrderAcceptance" name="dateOfOrderAcceptance"/>
                    </div>

                    <button type="submit" className="submit-btn">Добавить</button>
                </form>
                {Success && <p className="ok-message">Заказ успешно создан!</p>}
                {Error && <p className="error-message">{Error}</p>}
            </div>
        </div>
    )
}
