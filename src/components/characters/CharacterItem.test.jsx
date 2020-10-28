import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterItem from './CharacterItem';

describe('CharacterItem component', () => {
  afterEach(() => cleanup());
  it('renders CharacterItem', () => {
    const { asFragment } = render(<CharacterItem
      name="Arnold"
      image="test.png" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
