import "./header.scss"
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import './Footer.scss'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <div id="header">
        <div className="container">
            <div className="firstContainer">
                <Image src="/mainPage/logo 2.svg" alt="logo" width="241" height="124" className="logo"/>
                <form>
                    <input></input>
                </form>
                <div className="icon">
                    <Link href="/">
                        <Image src="/header/shop.svg" alt="profile" width="47" height="34"/>
                    </Link>
                    <Link href="/">
                        <Image src="/header/favourite.svg" alt="profile" width="47" height="34" href="/"/>
                    </Link>
                    <Link href="/">
                        <Image src="/header/profile.svg" alt="profile" width="47" height="34"
                               href="/"/> {/*заменить картинку*/}
                    </Link>
                </div>
            </div>
            <div className="secondContainer">
                <div className="firstLine">
                    <h1>КАТАЛОГ</h1>
                    <h1>ДОСТАВКА И <br/> ОПЛАТА </h1>
                    <h1>СТАТУС ПРОИЗВОДСТВЕННОГО <br/> ЗАКАЗА</h1>
                    <h1>О КОМПАНИИ</h1>
                    <h1>КОНТАКТЫ</h1>
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
            <div className="thirdContainer">

            </div>
        </div>
    </div>
    {children}
    <footer>
        <div >
            <div className="footer-container">
                <div className="info">
                    <Link href="/">
                        <Image src="/mainPage/logo 2.svg" width="200" height="100" alt=""/>
                    </Link>


                    <div className="social-media">
                        <p>Наши социальные сети:</p>

                        <ul>
                            <li><a href="#"><Image src="/footer/vk.png" width="48" height="48" alt="vk"/></a></li>
                            <li><a href="#"><Image src="/footer/tg.png" width="48" height="48" alt="telegram"/></a></li>
                            <li><a href="#"><Image src="/footer/tg.png" width="48" height="48" alt="WhatsApp"/></a></li>
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
                            <li>Изделия из стекла</li>
                            <li>Техника и сантехника</li>
                            <li>Раздвижные системы</li>
                            <li>Кромочные материалы</li>
                            <li>Плитные материалы</li>
                        </ul>
                    </div>

                    <div>
                        <p>Компания</p>
                        <ul>
                            <li>Доставка и оплата</li>
                            <li>Сроки выполнения услуг</li>
                            <li>Статус производственного
                                заказа
                            </li>
                            <li>О компании</li>
                            <li>Контакты</li>
                            <li>Сотрудничество</li>
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

        </div>
    </footer>
    </body>
    </html>
  );
}
