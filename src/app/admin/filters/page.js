import React from 'react';
import {BASE_URL} from "../../../config";

async function getFilters() {
    console.log(BASE_URL);
    const response = await fetch(`${BASE_URL}/api/v1/category/get-all`);

    // Проверяем, что запрос успешен (статус 200-299)
    if (!response.ok) {
        console.error("Ошибка при запросе:", response.status, response.statusText);
        return null; // Или выбросить ошибку, если нужно
    }

    try {
        // Пробуем парсить ответ как JSON
        const data = await response.json();
        return data;
    } catch (error) {
        // Если парсинг не удался, логируем ошибку
        console.error("Ошибка парсинга JSON:", error);
        return null;
    }
}


export default async function Page() {
    let categories = await getFilters();

    return (
        <div className="filters" id="filters">
            {categories && categories.map(category => (
                <>
                    <div className={"category"}>
                        <h3>{category.name}</h3>
                    </div>
                    <div className="filter" key={category.id}>
                        {category.filters.map(filter => (
                            <p key={filter.id}>{filter.filterType}</p> // Добавляем уникальный ключ для фильтров
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
}
