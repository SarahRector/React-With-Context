/* eslint-disable max-len */
export const getHeyArnoldCharacters = async(page = 1) => {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return json.map(character => ({
    id: character.id,
    name: character.name,
    image: character.image
  }));
};
