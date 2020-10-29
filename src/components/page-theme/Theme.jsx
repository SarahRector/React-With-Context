import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import CharacterPage from '../../pages/CharacterPage';
import Header from '../header/Header';
import './Theme.css';

const Theme = () => {
  return (
    <ThemeProvider>
      <Header />
      <CharacterPage />
    </ThemeProvider>
  );
};

export default Theme;
