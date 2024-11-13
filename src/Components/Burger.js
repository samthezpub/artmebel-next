"use client"

import React, {useState} from 'react'
import Image from "next/image";
import BurgerModal from "./BurgerModal";

export default function Burger() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function closeModal() {
        setIsModalOpen(false);
    }

    function openModal() {
        setIsModalOpen(true);
    }

    return (
        <>
            <div className="burger" onClick={openModal}>
                <Image src="/header/burger.svg" width="38" height="24" alt="меню"/>
            </div>

            <BurgerModal isModalOpen={isModalOpen} onClose={(closeModal)} />
        </>
    )
}
