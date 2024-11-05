import "./header.scss"
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import './Footer.scss'
import SearchProducts from "../Components/SearchProducts";
import BurgerModal from "@/Components/BurgerModal";
import Burger from "@/Components/Burger";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <div id="header">
        <div className="container">
            <div className="forAdapt">
            <div className="firstContainer">
                <div className="forMobile">
                    <Burger/>
                    <Link href="/">
                <Image src="/logo.svg" alt="logo" width="241" height="124" className="logo"/>
                    </Link>
                <div className="icon2">
                    <Link href="/">
                        <Image src="/header/shop.svg" alt="profile" width="47" height="34" className="shop"/>
                    </Link>
                    <Link href="/favourite">
                        <Image src="/header/favourite.svg" alt="profile" width="47" height="34"/>
                    </Link>
                </div>
                </div>
                <form>
                    <SearchProducts/>
                </form>
                <div className="icon">
                    <Link href="/makeOrder">
                        <Image src="/header/shop.svg" alt="profile" width="47" height="34"/>
                    </Link>
                    <Link href="/favourite">
                        <Image src="/header/favourite.svg" alt="profile" width="47" height="34" href="/"/>
                    </Link>

                </div>
            </div>

            <div className="secondContainer">
                <div className="firstLine">
                    <Link href="/catalog">
                    <h1>КАТАЛОГ</h1>
                    </Link>
                    <Link href="/furnitureForOrder" >
                    <h1>МЕБЕЛЬ НА <br/> ЗАКАЗ </h1>
                    </Link>
                    <Link href="./status">
                        <h1>СТАТУС ПРОИЗВОДСТВЕННОГО <br/> ЗАКАЗА</h1>
                    </Link>
                    <Link href="/#about">
                    <h1>О КОМПАНИИ</h1>
                    </Link>
                    <Link href="/#contacts">
                    <h1>КОНТАКТЫ</h1>
                    </Link>
                </div>
                <div className="secondLine">
                    <Image src="/header/Line 1.png" width="800" height="3" alt="/" className="Line"/>
                    <Image src="/header/smth.svg" width="170" height="42" alt="/"/>
                </div>
                <div className="thirdLine">
                    <div className="div1"><h1>МЕБЕЛЬНАЯ
                        ФУРНИТУРА</h1></div>
                    <div className="div2"><h1>КРОМОЧНЫЕ
                        МАТЕРИАЛЫ</h1></div>
                    <div className="div3"><h1>ПЛИТНЫЕ
                        МАТЕРИАЛЫ</h1></div>
                    <div className="div4"><h1>ФАСАДЫ</h1></div>
                    <div className="div5"><h1>ИЗДЕЛИЯ ИЗ
                        СТЕКЛА</h1></div>
                    <div className="div6"><h1>ТЕХНИКА И
                        САНТЕХНИКА</h1></div>
                    <div className="div7"><h1>РАЗДВИЖНЫЕ
                        СИСТЕМЫ</h1></div>
                    <div className="div8"><h1>УСЛУГИ</h1></div>
                </div>
            </div>
            </div>
            <div className="thirdContainer">
                <Image src="/header/add.svg" alt="add" width="330" height="246" />
            </div>
        </div>
    </div>
    {children}
    <footer>
        <div>
            <div className="footer-container">
                <div className="info">
                    <Link href="/">
                        <Image src="/logo.svg" width="200" height="100" alt=""/>
                    </Link>


                    <div className="social-media">
                        <p>Наши социальные сети:</p>

                        <ul>
                            <li><a href="#"><Image src="/footer/vk.png" width="48" height="48" alt="vk"/></a></li>
                            <li><a href="#"><Image src="/footer/tg.png" width="48" height="48" alt="telegram"/></a></li>

                        </ul>
                    </div>

                    <div className="contacts">
                        <div>
                            <p>г. Мариуполь,<br/> ул. Энгельса, 56</p>
                        </div>

                        <div>
                            <p>+7 (949) 000-00-00</p>
                        </div>

                        <div>
                            <p>С 09:00 до 17:00<br/>СБ,ВС – Выходные</p>
                        </div>
                        <div>
                            <p>ИП 1111111111111<br/>
                                ОГРН 111111111111111</p>
                        </div>
                    </div>
                </div>

                <nav>
                    <div>
                        <p>Интернет-магазин</p>
                        <ul>
                            <li>Мебельная фурнитура</li>


                            <li>Бытовая техника</li>

                        </ul>
                    </div>

                    <div>
                        <p>Компания</p>
                        <ul>
                            <Link href="/catalog">
                            <li>Каталог</li>
                            </Link>
                            <Link href="/furnitureForOrder" >
                            <li>Мебель на заказ</li>
                            </Link>
                            <Link href="./status">
                            <li>Статус производственного
                                заказа
                            </li>
                            </Link>
                            <Link href="/#about">
                            <li>О компании</li>
                            </Link>
                            <Link href="/#contacts">
                            <li>Контакты</li>
                            </Link>

                        </ul>
                    </div>

                    <div>
                        <p>Партнеры</p>
                        <ul>
                            <li>Hettich</li>
                            <li>Rehau</li>
                            <li>КЕДР</li>
                            <li>EGGER</li>
                            <li>Kronospan</li>
                            <li>Swiss Krono</li>
                            <li>Samet</li>
                            <li>Dollken</li>
                            <li>Hafele</li>
                            <li>KLEIBERIT</li>
                            <li>GranFest</li>
                            <li>Korner</li>
                            <li>Kastamonu</li>
                        </ul>
                    </div>
                </nav>

                <div className="map">

                    <div>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad618e8cbfcc15e00c78c5cde1ce4b95daa8a59ca30ffce51fc77347308374404&amp;source=constructor"
                            width="320" height="276" frameBorder="0" style={{borderRadius: "50px"}}></iframe>
                    </div>
                </div>

                <div className="license">
                    <p>© ООО «Art Mebel», 2024</p>

                    <div className="weber">
                        Сделано с любовью в <a href="http://weber-it.ru">Weber</a>
                    </div>
                </div>
            </div>
            <div id="mobile">
            <div className="footer-mobile">
                <div className="container">
                    <div className="logo">
                        <Image src="/logo.png" alt="logo" width="150" height="80" />
                    </div>
                    <div className="forForm">

                            <SearchProducts/>

                    </div>
                    <div className="text">
                        <div className="Line1">
                            <p>Главная</p>
                            <p>Каталог</p>
                            <p>Доставка и <br/> оплата</p>
                        </div>
                        <div className="Line2">
                            <p>СТАТУС<br/> ЗАКАЗА</p>
                            <p>О<br/> КОМПАНИИ</p>
                            <p>КОНТАКТЫ</p>
                        </div>
                    </div>
                    <div className="contacts">
                        <div className="phone">
                            <h1>+7 (949) 000-00-00</h1>
                            <p>Для звонков по России</p>
                        </div>
                        <div className="day">
                            <p>ПН-СБ – с 09:00 до 17:00</p>
                            <p>СБ,ВС – Выходные</p>
                        </div>
                        <div className="map">
                            <div>
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad618e8cbfcc15e00c78c5cde1ce4b95daa8a59ca30ffce51fc77347308374404&amp;source=constructor"
                                    width="415" height="200" frameBorder="0" style={{borderRadius: "50px"}}></iframe>
                            </div>
                        </div>
                        <div className="description">
                            <p>ИП «ArtMebel» использует файлы «cookie», с целью персонализации сервисов и повышения удобства пользования веб-сайтом. «Cookie» представляют собой небольшие файлы, содержащие информацию о предыдущих посещениях веб-сайта. Если вы не хотите использовать файлы «cookie», измените настройки браузера.
                                На информационном ресурсе применяются рекомендательные технологии. При применении информационных технологий предоставления информации осуществляется сбор, систематизация и анализ сведений, относящихся к предпочтениям пользователей сети «Интернет», находящихся на территории Российской Федерации.</p>
                        </div>
                        <div className="social-media">
                            <Link href="/"><Image src="/footer/vk.png" alt="/" width="48" height="48" style={{marginRight: "32px"}} /></Link>
                            <Link href="/"><Image src="/footer/tg.png" alt="/" width="48" height="48" /></Link>
                        </div>
                    </div>
                    <div className="lastContainer">
                    <div className="partners">
                        <Link href="/"><p>НАШИ ПАРТНЁРЫ</p></Link>
                    </div>
                    <div className="INN">
                        <p>ИНН: 123456789012</p>
                        <p>ОГРНИП: 123456789012345</p>
                    </div>
                    <div className="IP">
                        <p>© ИП «Art Mebel», 2024</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
    </body>
    </html>
  );
}
