import React from 'react'
import './mainPage.scss'
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div id="mainPage">
                <div className="center">
                    <div className="firstBlock">
                        <div className="leftPart">
                            <h1>СОЗДАЙ ЛУЧШУЮ МЕБЕЛЬ<br/>
                                С НАМИ</h1>
                            <div className="forButton">
                            <button className="button1">КАТАЛОГ</button>
                            <button className="button2">РАСПРОДАЖА</button>
                            <button className="button3">АКЦИЯ</button>
                            <button className="button4">НОВИНКИ</button>
                            <button className="button5">УЦЕНКА</button>
                            <button className="button6">ХИТ</button>
                            </div>
                        </div>
                        <div className="rightPart">
                            <Image src="/mainPage/logo 2.svg" width="580" height="310" alt="logo" />
                        </div>
                    </div>
                    <div className="secondBlock">
                        <h1>Наши партнёры</h1>
                        <Image src="/products/Line.png" width="368" height="1" alt="/" />
                        <div className="partners">
                            <div className="firstLine">
                                <Image src="/mainPage/1.png" alt="korner" width="400" height="229"/>
                                <Image src="/mainPage/2.png" alt="korner" width="512" height="138"/>
                                <Image src="/mainPage/3.png" alt="korner" width="378" height="163"/>
                                <Image src="/mainPage/4.png" alt="korner" width="331" height="198"/>
                            </div>
                            <div className="secondLine">
                                <Image src="/mainPage/5.png" alt="korner" width="428" height="158"/>
                                <Image src="/mainPage/6.png" alt="korner" width="472" height="162"/>
                                <Image src="/mainPage/7.png" alt="korner" width="680" height="213"/>
                            </div>
                            <div className="thirdLine">
                                <Image src="/mainPage/8.png" alt="korner" width="512" height="118"/>
                                <Image src="/mainPage/9.png" alt="korner" width="512" height="134"/>
                                <Image src="/mainPage/10.png" alt="korner" width="413" height="173"/>
                            </div>
                            <div className="forthLine">
                                <Image src="/mainPage/11.png" alt="korner" width="432" height="193"/>
                                <Image src="/mainPage/12.png" alt="korner" width="554" height="189"/>
                                <Image src="/mainPage/13.png" alt="korner" width="512" height="139"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
