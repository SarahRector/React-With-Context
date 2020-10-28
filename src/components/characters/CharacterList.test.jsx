import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';
import { getHeyArnoldCharacters } from '../../services/heyArnoldApi';

jest.mock('../../services/heyArnoldApi.js');

describe('CharacterList component', () => {
  it('renders CharacterList after loading', async() => {
    getHeyArnoldCharacters.mockResolvedValue([
      { id: 1, name: 'Arnold', image: 'test.png' }
    ]);
    render(<MemoryRouter>
      <CharacterList />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characters');
    
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
