import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState('lightTheme');

  const toggle = () => {
    setThemeType(oldType => {
      if(oldType === 'lightTheme') return 'darkTheme';
      return 'lightTheme';
    });
  };

  return (
    <ThemeContext.Provider value={{ themeType, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
