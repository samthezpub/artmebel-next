"use client"

const FiltersComponent = ({ filters }) => {
    return (
        <div className="filters">
            {filters.map((filter) => (
                <div className="filter" key={filter.id}>
                    <h3>{filter.filterType}</h3>
                    <select>
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