import React from 'react';
import { useThemePicker } from '../../hooks/themes';
import themes from '../page-theme/Theme.css';

const Header = () => {
  const { toggle } = useThemePicker();

  return (
    <header className={themes.dark}>
      <button data-testid="button" onClick={toggle}>Toggle Page Theme</button>
    </header>
  );
};

export default Header;
