import React from 'react'
import './admin.scss'
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div id="admin">
                <div className="container">
                    <div className="product">
                        <div className="picture">
                            <Link href="/">{/*Вставить картинку*/}</Link>
                        </div>
                        <div className="name">
                            <Link href="/">
                            <h1>Имя</h1>
                            </Link>
                        </div>
                        <div className="price">
                            <Link href="/">
                            <h1>Цена</h1>
                            </Link>
                        </div>
                        <div className="category">
                            <Link href="/">
                            <h1>Категория</h1>
                            </Link>
                        </div>
                        <div className="subcategory">
                            <Link href="/">
                            <h1>Подкатегория</h1>
                            </Link>
                        </div>
                        <div className="icon">
                            <Link href="/">
                            <Image src="/admin/bucket.png" alt="delete" width="78" height="68" />
                            </Link>
                            <Link href="/">
                            <Image src="/admin/edit.png" alt="delete"  width="68" height="68" />
                            </Link>
                        </div>
                    </div>
                    <div className="ForAddition">
                        <Link href="/">
                            <Image src="/admin/add.png" alt="add" width="114" height="114" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
