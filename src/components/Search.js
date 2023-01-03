import React from 'react';

const Search = props => {
  const { searchCountries, searchCountry, handleRegionChange } = props;

  return (
    <form className="px-10 mb-12 md:flex justify-between items-center md:px-28">
      <input
        type="search"
        placeholder="Search for a country"
        className="w-11/12 p-4 bg-gray-100 focus:outline-none block mb-10 md:w-96 md:mb-0 dark:bg-slate-black dark:opacity-100 dark:text-white"
        onChange={searchCountries}
        value={searchCountry}
      />
      <select
        className="w-52 bg-gray-100 focus:outline-none block p-4 dark:bg-slate-black dark:text-white"
        onChange={handleRegionChange}
      >
        <option value="all" defaultValue>
          Filter by region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};

export default Search;
