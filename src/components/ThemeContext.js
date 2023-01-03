import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  // STATE VALUES
  const [theme, setTheme] = useState(true);

  // TOGGLE FUNCTION
  const toggleDark = () => {
    if (theme) {
      document.documentElement.classList.add('dark');
      setTheme(prevTheme => !prevTheme);
    }

    if (!theme) {
      document.documentElement.classList.remove('dark');
      setTheme(prevTheme => !prevTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
