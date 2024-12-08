import { BASE_URL } from "../../../config";
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

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const categorySlug = (await params).categorySlug
    console.log("Категорислюг:" + categorySlug)

    // fetch data
    const category = await getCategoryByCategorySlug(categorySlug)
    console.log(category)

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: `${category.name} купить в Мариуполе в интернет магазине ArtMebel`,
        description: `${category.name} в Мариуполе; Купить в интернет магазине ArtMebel; Доступные цены, большой выбор, быстрая доставка, гарантия`,
        keywords: `купить ${category.name} в Мариуполе, купить ${category.name} Мариуполь, ${category.name} в Мариуполе, ${category.name} Мариуполь, ${category.name} бу Мариуполь, ${category.name} на заказ в Мариуполе, ${category.name} на заказ, бу ${category.name} Мариуполь, бу ${category.name}, ${category.name} в Мариуполе, бу ${category.name} Мариуполь, бу ${category.name}, купить ${category.name} на заказ в Мариуполе, купить ${category.name} на заказ`,
    }
}

export default async function Page({ params }) {
    const category = await getCategoryByCategorySlug(await params.categorySlug);
    const products = await getProductsByCategorySlug(await params.categorySlug);

    return (
        <section id="categoryProducts">
            <div className="container">
                {/* Название категории */}
                <div className="catalog-and-category">
                    <Link href={"/catalog"} className="catalog-link">
                        <Image src="/catalog/categorySlug/catalog-link.png" width="25" height="20" alt="Открыть каталог" />
                        <p>Каталог</p>
                    </Link>
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
                <SortingAndFilteringComponent initialProducts={products} filters={category.filters} currentCategory={category}/>
            </div>
        </section>
    );
}
