import React from 'react'


import './Pricing.scss'
import Link from "next/link";

export default function Pricing() {
    return (
        <div className="pricing">
            <div className="container">
                <div className="pagination">
                    <p><Link href="/mainPage">Главная/</Link>Цены</p>
                </div>
                <div className="header">
                    <p>Предоставляем услуги по раскрою: ЛДСП, МДФ, фанеры, пластика,<br/>
                        столешниц, кромки ПВХ и других материалов. А также услуги кромления различных материалов и<br/>
                        присадки деталей.</p>
                </div>

                <div className="for_download">
                    <p>Бланк формы заказа раскроя <a href="#">Скачать</a></p>
                    <p>Прайс на услуги <a href="#">Скачать</a></p>
                </div>

                <div className="basic-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Наименование услуги</th>
                            <th>Цена, ₽</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                    <p>28 (погонный метр) от 5 плит</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                    <p>31 (погонный метр) до 5 плит</p>
                                    <p>31 (погонный метр) до 5 плит</p>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table>
                        <thead>
                        <tr>
                            <th>Наименование услуги</th>
                            <th>Цена, ₽</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                    <p>28 (погонный метр) от 5 плит</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Раскрой ЛДСП толщиной 10 мм, 16 мм</th>
                            <td>
                                <div>
                                    <p>31 (погонный метр) до 5 плит</p>
                                    <p>31 (погонный метр) до 5 плит</p>
                                    <p>31 (погонный метр) до 5 плит</p>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="many-rows-table">
                    <p>ПРАЙС на Услуги по облицовке</p>
                    <p>Облицовка кромочной лентой PVC/ABS (цены указаны в ₽ за 1 м/п без стоимости ленты).</p>

                    <p>EVA клей</p>
                    <table>
                        <thead>
                        <tr>
                            <th></th>
                            <th>До 50<br/>
                                м
                            </th>
                            <th>От 50 м до 100<br/>
                                м
                            </th>
                            <th>От 100<br/>
                                м
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Облицовка прямолинейных деталей кромочной лентой
                                PVC/ABS 19 мм
                            </th>
                            <td>36</td>
                            <td>34</td>
                            <td>32</td>
                        </tr>

                        <tr>
                            <th scope="row">Облицовка прямолинейных деталей лентой PVC/ABS 21–25
                                мм
                            </th>
                            <td>36</td>
                            <td>34</td>
                            <td>32</td>
                        </tr>

                        <tr>
                            <th scope="row">Облицовка прямолинейных деталей лентой PVC/ABS 26–38
                                мм
                            </th>
                            <td>36</td>
                            <td>34</td>
                            <td>32</td>
                        </tr>

                        <tr>
                            <th scope="row">Облицовка лентой PVC 0,4×19 NEOplast с учетом её
                                стоимости
                            </th>
                            <td>36</td>
                            <td>34</td>
                            <td>32</td>
                        </tr>

                        <tr>
                            <th scope="row">Облицовка прямолинейных деталей кромочной лентой
                                PVC/ABS 19 мм
                            </th>
                            <td>36</td>
                            <td>34</td>
                            <td>32</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
