import React from 'react';
import {BASE_URL} from "../../../config";

async function getFilters() {
    return await fetch(`${BASE_URL}/api/v1/category/get-all`).then(res => res.json());
}

export default async function Page() {
    let categories = await getFilters();

    return (
        <div className="filters" id="filters">
            {categories.map(category => (
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
