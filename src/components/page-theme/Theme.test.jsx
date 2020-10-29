/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { getHeyArnoldCharacters } from '../../services/heyArnoldApi';
import Theme from './Theme';

jest.mock('../../services/heyArnoldApi.js');

describe('darkmode theme list', () => {
  it('changes the theme', async() => {
    getHeyArnoldCharacters.mockResolvedValue([
      {
        '_id': '5da237699734fdcb7bef8f56',
        'name': 'Miles Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
      }
    ]);

    render(<Theme />);

    const button = screen.getByTestId('button');
    const characters = await screen.findByTestId('characters');

    fireEvent.click(button);

    return waitFor(() => {
      expect(characters).toHaveClass('CharacterList dark');
    });
  });
});
