import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterItem from './CharacterItem';
import { ThemeProvider } from '../../context/ThemeContext';

describe('CharacterItem component', () => {
  afterEach(() => cleanup());
  it('renders CharacterItem', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <CharacterItem
          name="Arnold"
          image="test.png" />
      </ThemeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
