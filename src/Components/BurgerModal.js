"use client"

import React from 'react'

import './BurgerModal.scss'
import Image from "next/image";
import Link from "next/link";

export default function BurgerModal({isModalOpen, onClose}) {

    function handleClose() {
        console.log(1212)
        onClose()
    }

    return (

        <div className={isModalOpen ? "burger-modal active" : "burger-modal"}>
            <Link href={"/"} onClick={handleClose}>
                <Image className="logo" src={"/logo.svg"} alt={"Логотип"} width={150} height={75}/>
            </Link>
            <div className="forButton">
                <Link className="button" onClick={handleClose} href={"/catalog"}>КАТАЛОГ</Link>
                <Link className="button" onClick={handleClose} href={"/"}>РАСПРОДАЖА</Link>
                <Link className="button" onClick={handleClose} href={"/"}>АКЦИЯ</Link>
                <Link className="button" onClick={handleClose} href={"/"}>НОВИНКИ</Link>
                <Link className="button" onClick={handleClose} href={"/"}>УЦЕНКА</Link>
                <Link className="button" onClick={handleClose} href={"/"}>ХИТ</Link>
            </div>

            <button className="cross" onClick={() => {
                handleClose()
            }}><Image src={"/header/cross.png"} alt={"Закрыть"} width={20} height={20}/></button>
        </div>
    )
}
