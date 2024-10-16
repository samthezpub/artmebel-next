"use client";

const FiltersComponent = ({ filters, onFilterChange }) => {
    const handleFilterChange = (filterId, value) => {
        onFilterChange(filterId, value); // Передаем filterId и значение
    };

    return (
        <div className="filters">
            {filters.map((filter) => (
                <div className="filter" key={filter.id}>
                    <h3>{filter.filterType}</h3>
                    <select onChange={(e) => handleFilterChange(filter.id, e.target.value)}>
                        <option value="">Выбрать...</option>
                        {filter.values.map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default FiltersComponent;
