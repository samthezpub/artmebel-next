import React from 'react'
import Link from "next/link";

import './not-found.scss'


export default function Page() {
    return (
        <div id="not-found">
                <h1>404</h1>
                <p>Страница не найдена</p>
                <Link className="button" href={"/"}>На главную</Link>
        </div>
    )
}
