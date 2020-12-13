const Filter = ({ filter, filtersApplied, setFiltersApplied }) => {
  const deleteFilter = (ev) => {
    const filterToDelete = ev.target.previousElementSibling.textContent;
    const updatedFilters = filtersApplied.filter(
      (filter) => filter !== filterToDelete
    );
    setFiltersApplied(updatedFilters);
  };

  return (
    <h4 className="m-2 text-sm ml-0 bg-teal-100 text-teal-500 font-semibold rounded shadow-md overflow-hidden">
      <span className="py-2 px-4 ">{filter}</span>
      <button
        onClick={deleteFilter}
        className="py-2 px-4 bg-teal-500 text-white hover:bg-gray-800 ml-2"
      >
        X
      </button>
    </h4>
  );
};

export default Filter;
