import { BASE_URL } from "../../../../config";
import Link from "next/link";

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

export default async function Page({ params, searchParams }) {
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
                <h1>{category.name}</h1>

                {/* Подкатегории */}
                <div>
                    {category.subCategories.map((subcategory) => (
                        <div className="subcategory" key={subcategory.slug}>
                            <Link href={`/catalog/${subcategory.slug}`}>{subcategory.name}</Link>
                        </div>
                    ))}
                </div>

                {/* Форма для сортировки */}
                <form method="GET" action={`/catalog/${params.categorySlug}`}>
                    <label htmlFor="sort">Сортировать по:</label>
                    <select id="sort" name="sort" defaultValue={sortType}>
                        <option value="default">Без сортировки</option>
                        <option value="priceAsc">Цена (по возрастанию)</option>
                        <option value="priceDesc">Цена (по убыванию)</option>
                        <option value="nameAsc">Название (по алфавиту)</option>
                    </select>
                    <button type="submit">Применить</button> {/* Кнопка для отправки формы */}
                </form>


                {/* Отображение товаров */}
                <div>
                    {products.map((product) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.price} ₽</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
