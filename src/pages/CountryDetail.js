import React from 'react';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CountryDetail = () => {
  let navigate = useNavigate();
  let { countryName } = useParams();

  const [country, setCountry] = useState([]);

  const getCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryName}`
      );
      const data = await response.json();
      if (data) {
        setCountry(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, [countryName]);

  return (
    <>
      <Navbar />
      <div className="w-11/12 h-full mx-auto grid justify-items-center grid-cols-1 md:grid-cols-3 md:gap-10 lg:grid-cols-4 md:h-screen">
        {country.map((element, index) => {
          const {
            name,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies,
            languages,
            borders,
            flags,
          } = element;

          return (
            <section
              className="justify-self-start mb-6 w-screen dark:text-white"
              key={index}
            >
              <button
                className="w-28 py-2 m-2 shadow-[0px_0px_4px_1px_rgba(0, 0, 0, 0.104931)] border-solid border-2 rounded-sm flex justify-center gap-2 mb-12"
                onClick={() => navigate(-1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                Back
              </button>
              <section className="grid grid-cols-1 md:justify-items-center lg:grid-cols-2 lg:gap-10">
                <img
                  src={flags.svg}
                  alt={`${name.common} Flag`}
                  className="w-80 h-56 mb-8 rounded-lg md:w-[450px] md:h-[300px] lg:w-[560px] lg:h-[400px] lg:justify-self-start"
                />
                <section className="grid lg:justify-self-start lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
                  <div>
                    <h1 className="font-extrabold text-2xl mb-4">
                      {name.common}
                    </h1>
                    <h5 className="mb-2">
                      <span className="font-semibold">Native Name: </span>
                      {name.official}
                    </h5>
                    <h5 className="mb-2">
                      <span className="font-semibold">Population: </span>
                      {population.toLocaleString()}
                    </h5>
                    <h5 className="mb-2">
                      <span className="font-semibold">Region: </span>
                      {region}
                    </h5>
                    <h5 className="mb-2">
                      <span className="font-semibold">Sub Region: </span>
                      {subregion}
                    </h5>
                    <h5 className="mb-8">
                      <span className="font-semibold">Capital: </span>
                      {capital}
                    </h5>
                  </div>

                  <section className="lg:pt-12">
                    <h5 className="mb-2">
                      <span className="font-semibold">Top Level Domain: </span>
                      {tld}
                    </h5>
                    <h5 className="mb-2">
                      <span className="font-semibold">Currencies: </span>
                      {Object.values(currencies).map(currency => {
                        return <span>{currency.name} </span>;
                      })}
                    </h5>
                    <h5 className="mb-8">
                      <span className="font-semibold">Languages: </span>
                      {Object.entries(languages).map(
                        ([key, value], index, arr) => {
                          if (!value) return;
                          return index === arr.length - 1 ? (
                            <span className="m-1">{value}</span>
                          ) : (
                            <span className="m-1">{`${value},`}</span>
                          );
                        }
                      )}
                    </h5>
                  </section>
                  <section className="justify-self-start mb-6 lg:col-span-2">
                    <h3 className="font-semibold text-lg">
                      Border Countries:{' '}
                    </h3>
                    {borders ? (
                      borders.map((country, index) => {
                        return (
                          <button
                            key={index}
                            className="w-28 py-2 mr-2 shadow-[0px_0px_4px_1px_rgba(0, 0, 0, 0.104931)] border-solid border-2 rounded-sm mb-2"
                            onClick={() =>
                              navigate(`/countrydetail/${country}`, {})
                            }
                          >
                            {country}
                          </button>
                        );
                      })
                    ) : (
                      <h5>No Neighbors</h5>
                    )}
                  </section>
                </section>
              </section>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default CountryDetail;
