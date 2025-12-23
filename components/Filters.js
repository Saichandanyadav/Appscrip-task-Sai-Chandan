export default function Filters({ selectedFilters, onFilterChange, onClearAll }) {
  const categories = [
    { id: 'mens', label: "Men's Clothing" },
    { id: 'womens', label: "Women's Clothing" },
    { id: 'bags', label: "Bags & Backpacks" },
    { id: 'electronics', label: "Electronics" }
  ];

  return (
    <aside className="filters">
      <div className="filters-header">
        <h3>FILTERS</h3>
        {selectedFilters.length > 0 && (
          <button className="clear-all-btn" onClick={onClearAll}>
            CLEAR ALL
          </button>
        )}
      </div>
      <div className="filter-options">
        {categories.map((cat) => (
          <label key={cat.id} className="filter-label">
            <input
              type="checkbox"
              checked={selectedFilters.includes(cat.id)}
              onChange={() => onFilterChange(cat.id)}
            />
            <span className="checkbox-text">{cat.label}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}