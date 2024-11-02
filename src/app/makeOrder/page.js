import React from 'react'
import './makeOrder.scss'
import Image from "next/image";
import Link from "next/link";
import ProductImageSlider from "../../Components/ProductImageSlider";
import CartItems from "../../Components/CartItems";

export default function Page() {
    return (
        <>
            <div id="makeOrder">
                <div className="container">
                    <div className="pagination">
                        <p><Link href="/">Главная/</Link>Оформление заказа</p>
                    </div>
                    <h1 className="text">Корзина</h1>
                    <div className="order-and-cart">
                        <div className="leftPart">
                            <form>
                                <div className="choose">
                                    <div className="firstFilter">
                                        <input type="radio" name="paymethod" value="phisLico"/><label
                                        htmlFor="phisLico">Физическое
                                        лицо</label>
                                    </div>
                                    <div className="secondFilter">
                                        <input type="radio" name="paymethod" value="lawLico"/><label htmlFor="lawLico">Юридическое
                                        лицо</label>
                                    </div>
                                </div>
                                <div className="dataUser">
                                    <input placeholder="Имя:"/>
                                    <input placeholder="Фамилия:"/>
                                    <input placeholder="Отчество:"/>
                                    <input placeholder="Номер телефона:"/>
                                    <input placeholder="Email:"/>
                                    <input placeholder="Адрес (если доставка):" className="delivery"/>
                                </div>
                            </form>
                            <div className="money">
                                <Image src="/makeOrder/Coin.svg" alt="/" width="106" height="106"/>
                                <p>Наличными при получении<br/>(или картой онлайн)</p>
                            </div>
                            <div className="card">
                                <Image src="/makeOrder/Credit Card.svg" alt="/" width="148" height="122"/>
                                <p>Наличными при получении<br/>(или картой онлайн)</p>
                            </div>
                            <div className="name">
                                <p>ФЛП: Вася Пупкин Пупкович</p>
                                <p>ИНН:2772282834</p>
                                <p>78347827458274387572742897ФЕ “ПСБ”</p>
                            </div>
                        </div>
                        <div className="rightPart">
                            <CartItems></CartItems>
                        </div>
                    </div>
                    <div className="bottomPart">
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <p>Я ознакомлен с условиями доставки и оплаты, а также согласен с условиями использования
                                моих
                                персональных данных</p>
                        </div>
                        <div className="button">
                            <button>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
