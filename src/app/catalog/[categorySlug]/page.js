import { BASE_URL } from "../../../../config";
import Link from "next/link";
import './categorySlug.scss';
import Image from "next/image";
import SortingAndFilteringComponent from "../../../Components/SortingAndFilteringComponent";

// Получаем продукты по slug категории
async function getProductsByCategorySlug(categorySlug) {
    return await fetch(BASE_URL + `/api/v1/category/get/${categorySlug}/products`, { next: { revalidate: 3600 } }).then(response => {
        return response.json();
    });
}

// Получаем категорию по slug
async function getCategoryByCategorySlug(categorySlug) {
    return await fetch(BASE_URL + `/api/v1/category/getBySlug/${categorySlug}`, { next: { revalidate: 3600 } }).then(response => {
        return response.json();
    });
}

export default async function Page({ params }) {
    const category = await getCategoryByCategorySlug(params.categorySlug);
    const products = await getProductsByCategorySlug(params.categorySlug);

    return (
        <section id="categoryProducts">
            <div className="container">
                {/* Название категории */}
                <div className="catalog-and-category">
                    <div className="catalog-link">
                        <Image src="/catalog/categorySlug/catalog-link.png" width="25" height="20" alt="Открыть каталог" />
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

                {/* Компонент сортировки и фильтрации */}
                <SortingAndFilteringComponent initialProducts={products} filters={category.filters} />
            </div>
        </section>
    );
}
