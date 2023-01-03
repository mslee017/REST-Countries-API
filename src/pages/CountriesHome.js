import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import { useNavigate } from 'react-router-dom';

const CountriesHome = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [selectRegion, setSelectRegion] = useState('all');
  const [filteredCountry, setFilteredCountry] = useState([]);
  const navigate = useNavigate();

  const getAllCountries = async () => {
    if (selectRegion === 'all') {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setAllCountries(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${selectRegion}`
        );
        const data = await response.json();
        setAllCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const searchCountries = event => {
    event.preventDefault();
    setSearchCountry(event.target.value);

    if (searchCountry !== '') {
      setFilteredCountry(
        allCountries.filter(country => {
          const { name } = country;
          return (
            name.common.toLowerCase().indexOf(searchCountry.toLowerCase()) === 0
          );
        })
      );
    } else {
      setAllCountries(allCountries);
    }
  };

  const handleRegionChange = event => {
    setSelectRegion(event.target.value);
  };

  useEffect(() => {
    getAllCountries();
  }, [selectRegion]);

  return (
    <>
      <Navbar />
      <Search
        searchCountries={searchCountries}
        searchCountry={searchCountry}
        handleRegionChange={handleRegionChange}
      />
      <div className="w-11/12 h-full mx-auto grid justify-items-center gap-y-10 grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {searchCountry.length > 0
          ? filteredCountry.map((country, index) => {
              const { flags, name, population, region, capital, cca2 } =
                country;
              return (
                <section
                  className="flex flex-col cursor-pointer shadow-lg w-72 h-[366px] rounded dark:bg-slate-black dark:text-white"
                  key={index}
                  onClick={() =>
                    navigate(`/countrydetail/${cca2.toLowerCase()}`, {})
                  }
                >
                  <img
                    src={flags.png}
                    alt=""
                    className="w-full h-[160px] mb-4 rounded-t"
                  />
                  <section className="pl-8">
                    <h1 className="font-extrabold text-lg mb-4">
                      {name.common}
                    </h1>
                    <h5 className="mb-1">
                      <span className="font-semibold">Population: </span>{' '}
                      {population.toLocaleString()}
                    </h5>
                    <h5 className="mb-1">
                      <span className="font-semibold">Region: </span> {region}
                    </h5>
                    <h5>
                      <span className="font-semibold">Capital: </span> {capital}
                    </h5>
                  </section>
                </section>
              );
            })
          : allCountries.map((country, index) => {
              const { flags, name, population, region, capital, cca2 } =
                country;
              return (
                <section
                  className="flex flex-col cursor-pointer shadow-lg w-72 h-[366px] rounded dark:bg-slate-black dark:text-white"
                  key={index}
                  onClick={() =>
                    navigate(`/countrydetail/${cca2.toLowerCase()}`, {})
                  }
                >
                  <img
                    src={flags.png}
                    alt=""
                    className="w-full h-[160px] mb-4 rounded-t"
                  />
                  <section className="pl-8">
                    <h1 className="font-extrabold text-lg mb-4">
                      {name.common}
                    </h1>
                    <h5 className="mb-1">
                      <span className="font-semibold">Population: </span>{' '}
                      {population.toLocaleString()}
                    </h5>
                    <h5 className="mb-1">
                      <span className="font-semibold">Region: </span> {region}
                    </h5>
                    <h5>
                      <span className="font-semibold">Capital: </span> {capital}
                    </h5>
                  </section>
                </section>
              );
            })}
      </div>
    </>
  );
};

export default CountriesHome;
