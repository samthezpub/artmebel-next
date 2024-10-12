import React from 'react'
import {Container} from "@mui/material";
import Link from 'next/link'

import './Catalog.scss';

export default function Page() {
    return (
        <div className="catalog">
            <Container maxWidth="xl">
                <div className="pagination">
                    //TODO делать пагинацию
                </div>

                <div className="header">
                    <h1>Каталог</h1>
                </div>

                <div className="categories_container">
                    <div className="categories">
                        <ul>
                            <li>
                                <Link href="#">
                                    <span>МЕБЕЛЬНАЯ ФУРНИТУРА</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>ТЕХНИКА И САНТЕХНИКА</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>РАЗДВИЖНЫЕ СИСТЕМЫ</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>КРОМОЧНЫЕ МАТЕРИАЛЫ</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>ИЗДЕЛИЯ ИЗ СТЕКЛА</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>ПЛИТНЫЕ МАТЕРИАЛЫ</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>ФУРНИТУРА ДЛЯ СТЕКЛЯННЫХ КОНСТРУКЦИЙ</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>ФАСАДЫ</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>УСЛУГИ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="subcategories-container">
                        <div className="subcategories">
                            <div className="subcategory">
                                <Link href="/catalog/stulya">
                                    <h2>Фурнита алибабы и прочее</h2>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="subcategory">
                                <Link href="#">
                                    <h2>Столешницы</h2>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="subcategory">
                                <Link href="#">
                                    <h2>Столешницы</h2>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="subcategory">
                                <Link href="#">
                                    <h2>Столешницы</h2>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="subcategory">
                                <Link href="#">
                                    <h2>Столешницы</h2>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="subcategory">
                                <Link href="#">
                                    <h2>Столешницы</h2>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="subcategory">
                                <Link href="#">
                                    <h2>Столешницы</h2>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span>Турутуту</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
