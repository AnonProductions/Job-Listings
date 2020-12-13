import BaseLabel from "./base/BaseLabel";

const Job = ({ job, filtersApplied, setFiltersApplied }) => {
  const filters = [job.role, job.level, ...job.languages, ...job.tools];

  const updateFilters = (ev) => {
    const filter = ev.target.textContent;
    const prevFilters = [...filtersApplied];
    if (!prevFilters.includes(filter)) {
      prevFilters.push(filter);
      setFiltersApplied(prevFilters);
    }
  };

  return (
    <div
      className={`flex bg-white shadow-2xl py-6 px-8 mx-6 mb-14 lg:mb-8 rounded-md ${
        job.featured ? "border-l-4 border-teal-500" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between lg:w-full">
        <div className="lg:flex items-center space-x-4">
          <img
            className="-mt-16 mb-4 lg:m-0"
            src={job.logo}
            alt={job.company}
          />
          <div>
            <h3>
              <span className="text-teal-500 font-semibold">{job.company}</span>
              {job.new ? <BaseLabel text="NEW!" /> : <></>}
              {job.featured ? <BaseLabel text="FEATURED" dark /> : <></>}
            </h3>
            <h2 className="text-gray-700 font-semibold text-lg my-2">
              {job.position}
            </h2>
            <p className="flex items-center space-x-4 mb-4">
              <span className="text-sm text-gray-500">{job.postedAt}</span>
              <span className="w-1 h-1 bg-gray-500 inline-block rounded-full"></span>
              <span className="text-sm text-gray-500">{job.contract}</span>
              <span className="w-1 h-1 bg-gray-500 inline-block rounded-full"></span>
              <span className="text-sm text-gray-500">{job.location}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center border-t border-gray-300 lg:border-0 pt-4">
          {filters.map((filter, idx) => (
            <button
              onClick={updateFilters}
              className="m-2 text-sm ml-0 bg-teal-100 text-teal-500 font-semibold py-2 px-4 rounded shadow-md"
              key={idx}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
