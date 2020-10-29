import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useThemePicker = () => {
  const { themeType, toggle } = useContext(ThemeContext);
  return { themeType, toggle };
};
