"use client";

import React from 'react';
import './OrderTable.scss'

export default function OrderTable({ product, error }) {
    return (
        <div>
            {error ? (
                <p>Товар не найден</p>
            ) : (
                product && (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Цена</th>
                            <th>Дата принятия</th>
                            <th>Статус</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.price}</td>
                            <td>{product.dateOfOrderAcceptance}</td>
                            <td>{product.status}</td>
                        </tr>
                        </tbody>
                    </table>
                )
            )}
        </div>
    );
}
