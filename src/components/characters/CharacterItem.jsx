import React from 'react';
import PropTypes from 'prop-types';
import { useThemePicker } from '../../hooks/themes';
import '../page-theme/Theme.css';

const CharacterItem = ({ name, image }) => {
  const { theme } = useThemePicker();

  return (
    <figure className={theme}>
      <img src={image} alt={name} width="150px" />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterItem;
