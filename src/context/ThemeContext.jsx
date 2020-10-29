import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setThemeType] = useState('light');

  const toggle = () => {
    if(theme === 'light') setThemeType('dark');
    if(theme === 'dark') setThemeType('light');
    console.log(theme);
  };

  const bucket = {
    theme,
    toggle
  };

  return (
    <ThemeContext.Provider value={bucket}>
      {children}
    </ThemeContext.Provider>
  );
};
