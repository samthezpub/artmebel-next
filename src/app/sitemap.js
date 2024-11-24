import {BASE_URL} from "../config";

export default async function sitemap() {
    const baseUrl = BASE_URL;
    const url = "https://art-mebel.com.ru";

    // Загружаем категории и товары (из API, базы данных или где ты их хранишь)
    const categories = await fetch(`${baseUrl}/api/v1/category/get-all`).then((res) => res.json());
    const products = await fetch(`${baseUrl}/api/v1/catalog/get-all`).then((res) => res.json());

    // Основные страницы сайта
    const staticPages = [
        { url: `${url}/`, lastModified: new Date().toISOString() },
        { url: `${url}/catalog`, lastModified: new Date().toISOString() },
        { url: `${url}/furnitureForOrder`, lastModified: new Date().toISOString() },
        { url: `${url}/status`, lastModified: new Date().toISOString() },
        { url: `${url}/makeOrder`, lastModified: new Date().toISOString() },
        { url: `${url}/favourite`, lastModified: new Date().toISOString() },
    ];

    // Страницы категорий
    const categoryPages = categories.map((category) => ({
        url: `${url}/catalog/${category.slug}`,
        lastModified: new Date(Date.now()).toISOString(),
    }));

    // Страницы товаров
    const productPages = products.map((product) => ({
        url: `${url}/catalog/products/${product.slug}`,
        lastModified: new Date(Date.now()).toISOString(),
    }));

    // Объединяем все страницы
    return [...staticPages, ...categoryPages, ...productPages];
}
