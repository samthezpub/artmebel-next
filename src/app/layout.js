import "./header.scss"
import "./globals.css";
import Image from "next/image";
import Link from "next/link";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
        <div id="header">
            <div className="container">
                <div className="firstContainer">
                    <Image src="/mainPage/logo 2.svg" alt="logo" width="241" height="124" className="logo" />
                    <form>
                        <input></input>
                    </form>
                    <div className="icon">
                        <Link href="/" >
                        <Image src="/header/shop.svg" alt="profile" width="47" height="34" />
                        </Link>
                        <Link href="/" >
                        <Image src="/header/favourite.svg" alt="profile" width="47" height="34" href="/" />
                        </Link>
                        <Link href="/" >
                            <Image src="/header/profile.svg" alt="profile" width="47" height="34" href="/" /> {/*заменить картинку*/}
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
                        <Image src="/header/Line 1.png" width="800" height="3" alt="/" className="Line" />
                        <Image src="/header/smth.svg" width="170" height="42" alt="/" />
                    </div>
                    <div className="thirdLine">
                        <div className="div1"><h1>МЕБЕЛЬНАЯ
                            ФУРНИТУРА</h1> </div>
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
        <div id="footer">

        </div>
    </body>
    </html>
  );
}
