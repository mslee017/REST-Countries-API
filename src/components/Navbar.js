import React from 'react';
import moonLight from '../assets/moon-light.png';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from './ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { toggleDark } = useGlobalContext();

  return (
    <nav className="flex text-center sm:text-left justify-between py-2 px-6 bg-white shadow items-baseline w-full mb-6 dark:bg-slate-black">
      <h1
        className="text-shaded-black font-extrabold py-4 cursor-pointer dark:text-white"
        onClick={() => navigate('/')}
      >
        Where in the world?
      </h1>

      <img src={moonLight} alt="" className="ml-auto mr-2" />
      <h1
        className="text-shaded-black font-bold cursor-pointer dark:text-white"
        onClick={toggleDark}
      >
        Dark Mode
      </h1>
    </nav>
  );
};

export default Navbar;
