import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Job from "./components/Job";
import data from "./data/data.json";

function App() {
  const jobs = data;
  const [filtersApplied, setFiltersApplied] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const clearFilters = () => setFiltersApplied([]);

  useEffect(() => {
    setFilteredJobs(
      filtersApplied.length
        ? jobs.filter((job) => {
            const jobFilters = [
              job.role,
              job.level,
              ...job.languages,
              ...job.tools,
            ];
            // const dec = jobFilters.every((jobFilter) =>
            //   filtersApplied.includes(jobFilter)
            // );
            const dec = filtersApplied.every((filter) =>
              jobFilters.includes(filter)
            );
            return dec;
          })
        : jobs
    );
  }, [filtersApplied, jobs]);

  return (
    <div className="bg-blue-100">
      <header className="mb-8 relative z-10 bg-teal-500 bg-opacity-50">
        <img
          className="hidden lg:block"
          src="./images/bg-header-desktop.svg"
          alt="header-desktop"
        />
        <img
          className="block lg:hidden"
          src="./images/bg-header-mobile.svg"
          alt="header-desktop"
        />
      </header>
      {filtersApplied.length ? (
        <div className="flex relative z-20 justify-between items-center m-6 -mt-20 bg-white py-4 px-6 shadow-2xl rounded-md">
          <div className="flex flex-wrap">
            {filtersApplied.map((filter) => (
              <Filter
                filter={filter}
                key={filter}
                filtersApplied={filtersApplied}
                setFiltersApplied={setFiltersApplied}
              />
            ))}
          </div>
          <button
            onClick={clearFilters}
            className="text-teal-500 text-sm font-semibold underline"
          >
            Clear
          </button>
        </div>
      ) : (
        <></>
      )}
      <main className="pt-16 lg:p-0">
        {filteredJobs.map((job) => (
          <Job
            job={job}
            key={job.id}
            filtersApplied={filtersApplied}
            setFiltersApplied={setFiltersApplied}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
