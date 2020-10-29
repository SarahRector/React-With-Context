/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';
import styles from './CharacterList.css';
import { useThemePicker } from '../../hooks/themes';
import themes from '../page-theme/Theme.css';

const CharacterList = ({ page }) => {
  const { theme } = useThemePicker();
  const { loading, characters } = useCharacters(page);
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character._id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="characters" className={`${styles.CharacterList} ${theme === 'dark' ? themes.dark : themes.light}`}>
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};

export default CharacterList;
