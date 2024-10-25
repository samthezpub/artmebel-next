import React from 'react'
import './mainPage.scss'
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import RunString from "@/Components/RunString";


const Carousel = dynamic(() => import('../../Components/Carousel'), { ssr: false })

export default function Page() {
    return (
        <>
            <div id="mainPage">
                <div className="center">
                    <div className="firstBlock">
                        <div className="leftPart">
                            <h1>ТОЛЬКО ЛУЧШАЯ МЕБЕЛЬ
                            </h1>
                            <div className="forButton">
                            <button>КАТАЛОГ</button>
                            <button >РАСПРОДАЖА</button>
                            <button>АКЦИЯ</button>
                            <button >НОВИНКИ</button>
                            <button>УЦЕНКА</button>
                            <button>ХИТ</button>
                            </div>
                        </div>
                        <div className="rightPart">

                        </div>
                    </div>
                    <div className="secondBlock">
                        <h1>ПРЕИМУЩЕСТВА</h1>
                        <div className="cards">
                            <div className="card1">
                                <h1>Быстрая доставка</h1>
                                <Image src="/mainPage/car.png" alt="delivery" width="200" height="200" />
                            </div>
                            <div className="card2">
                                <h1>Скидки и акции</h1>
                                <Image src="/mainPage/percent.png" alt="delivery" width="200" height="200" />
                            </div>
                            <div className="card3">
                                <h1>Удобный самовывоз</h1>
                                <Image src="/mainPage/map.png" alt="delivery" width="200" height="200" />
                            </div>
                            <div className="card4">
                                <h1>Широкий выбор</h1>
                                <Image src="/mainPage/bag.png" alt="delivery" width="200" height="200" />
                            </div>
                        </div>
                    </div>
                    <div className="thirdBlock">
                        <h1>ПРИМЕРЫ НАШИХ РАБОТ НА ЗАКАЗ</h1>
                        <div className="carousel">
                            <RunString dir={"mainPage/mebel"} length={3} width={591} height={480}></RunString>
                        </div>
                        <button>ЗАКАЗАТЬ</button>
                    </div>
                    <div className="forthBlock">
                        <h2>Наши партнеры</h2>
                        <RunString dir={"mainPage"} length={13} width={460} height={187} />
                    </div>
                    <div className="contacts">
                        <h1>КОНТАКТЫ</h1>
                        <div className="info">
                        <div className="telephone">
                            <p style={{marginBottom: "20px"}}>г. Мариуполь, ул. Энгельса, 56</p>
                            <h2 style={{marginBottom: "10px"}}>+7 (949) 000-00-00</h2>
                            <p style={{marginBottom: "20px", color: "#E3E3E3"}}>Для звонков по России</p>
                            <p>ПН-ПТ – 09:00 до 17:00</p>
                            <p>СБ,ВС – Выходные</p>
                            <div className="social">
                                <Link href="/"><Image src="/footer/vk.png" alt="/" width="80" height="80" style={{marginRight: "20px"}} /></Link>
                                <Link href="/"><Image src="/footer/tg.png" alt="/" width="80" height="80" /></Link>
                            </div>
                        </div>
                        <div className="map">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad618e8cbfcc15e00c78c5cde1ce4b95daa8a59ca30ffce51fc77347308374404&amp;source=constructor"
                                width="948" height="433" frameBorder="0" style={{borderRadius: "50px"}}></iframe>

                    </div>
                        </div>
                </div>

            </div>
        </div>
</>
)
}
