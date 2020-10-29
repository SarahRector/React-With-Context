import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getHeyArnoldCharacters } from '../../services/heyArnoldApi';
import { ThemeProvider } from '../../context/ThemeContext';

jest.mock('../../services/heyArnoldApi.js');

describe('CharacterList component', () => {
  it('renders CharacterList after loading', async() => {
    getHeyArnoldCharacters.mockResolvedValue([
      { _id: 1, name: 'Arnold', image: 'test.png' }
    ]);
    render(<ThemeProvider>
      <CharacterList />
    </ThemeProvider>);

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characters');
    
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
