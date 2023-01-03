import React from 'react';
import CountriesHome from './pages/CountriesHome';
import CountryDetail from './pages/CountryDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="dark:bg-main-black h-full w-screen">
      <Routes>
        <Route path="/" element={<CountriesHome />} />
        <Route path="/countrydetail/:countryName" element={<CountryDetail />} />
      </Routes>
    </main>
  );
}

export default App;
