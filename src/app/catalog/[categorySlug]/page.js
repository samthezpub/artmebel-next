import {BASE_URL} from "../../../../config";
import Link from "next/link";
import './categorySlug.scss'
import Image from "next/image";
import FiltersComponent from "../../../Components/FiltersComponent";

// Получаем продукты по slug категории
async function getProductsByCategorySlug(categorySlug) {
    return await fetch(BASE_URL + `/api/v1/category/get/${categorySlug}/products`).then(response => {
        return response.json();
    });
}

// Получаем категорию по slug
async function getCategoryByCategorySlug(categorySlug) {
    return await fetch(BASE_URL + `/api/v1/category/getBySlug/${categorySlug}`).then(response => {
        return response.json();
    });
}

// Функция для сортировки товаров
function sortProducts(products, sortType) {
    if (sortType === "priceAsc") {
        return products.sort((a, b) => a.price - b.price);
    } else if (sortType === "priceDesc") {
        return products.sort((a, b) => b.price - a.price);
    } else if (sortType === "nameAsc") {
        return products.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        return products; // По умолчанию возвращаем без сортировки
    }
}

export default async function Page({params, searchParams}) {
    const category = await getCategoryByCategorySlug(params.categorySlug);
    let products = await getProductsByCategorySlug(params.categorySlug);


    // Получаем параметр сортировки из URL (GET параметр)
    const sortType = searchParams.sort || "default";

    // Применяем сортировку на сервере
    products = sortProducts(products, sortType);


    return (
        <section id="categoryProducts">
            <div className="container">
                {/* Название категории */}
                <div className="catalog-and-category">
                    <div className="catalog-link">
                        <Image src="/catalog/categorySlug/catalog-link.png" width="25" height="20"
                               alt="Открыть каталог"/>
                        <p>Каталог</p>
                    </div>
                    <h1>{category.name}</h1>
                </div>

                {/* Подкатегории */}
                <div className="subcategories">
                    {category.subCategories.map((subcategory) => (
                        <Link href={`/catalog/${subcategory.slug}`} key={subcategory.slug}
                              className={"subcategory"}>{subcategory.name}</Link>
                    ))}
                </div>

                <div className="sort">
                    {/* Форма для сортировки */}
                    <form method="GET" action={`/catalog/${params.categorySlug}`}>
                        <label htmlFor="sort">Сортировать по:</label>
                        <select id="sort" name="sort" defaultValue={sortType}>
                            <option value="default">Без сортировки</option>
                            <option value="priceAsc">по возрастанию цены</option>
                            <option value="priceDesc">по убыванию цены</option>
                            <option value="nameAsc">по названию</option>
                        </select>
                        <button type="submit">Применить</button>
                        {/* Кнопка для отправки формы */}
                    </form>
                </div>

                <FiltersComponent filters={category.filters}></FiltersComponent>


                {/* Отображение товаров */}
                <div className="products">
                    {products.map((product) => (
                        <div className="product" key={product.id}>
                            <div className="heart-container">
                                <Image className="heart-outline" src={"/catalog/categorySlug/like.svg"}
                                       alt={"Добавить в избранное"} width={40} height={40}/>
                                <Image className="like-filled" src={"/catalog/categorySlug/like-fill.svg"}
                                       alt={"Добавить в избранное"} width={40} height={40}/>
                            </div>
                            <div className="image-slider">
                                <Image src={"/catalog/categorySlug/tumbaumba.jpg"} width={170} height={183}/>
                            </div>
                            <p className="price">{product.price} ₽</p>
                            <h3 className="name">{product.name}</h3>

                            <Image className="line" src={"/catalog/categorySlug/line.png"} width={170} height={2}/>

                            <Image className="cart-icon" src={"/catalog/categorySlug/cart.png"} width={36} height={36}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
