import getHash from '../utils/getHash';
import getData from '../utils/getData';


const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  let status = character.status;

  const view = `
    <div class="characters-inner">
      <article class="characters-card">
        <img src="${character.image}" alt="${character.name}">
      </article>
      <article class="characters-card--description">
        <div class="character-detail">
          <h2 class="character-card--name">${character.name}</h2>
          <p class="character-card--status">
            <span class="character-status">
            ${status === 'Alive' ? '<span class="character-status--live"></span>': status === 'Dead' ? '<span class="character-status--dead"></span>' : '<span class="character-status--unknown"></span>'}
            ${character.status} - ${character.species} - ${character.gender}
          </span>
          </p>
        </div>
      <p class="card-detail">Episodes</p>
      <h4>${character.episode.length}</h4>
      <p class="card-detail">Origin</p>
      <h4><a href="${character.origin.url}">${character.origin.name}</a></h4>
      <p class="card-detail">Last Location</p>
      <h4><a href="${character.location.url}">${character.location.name}</a></h4>
  `;
  return view;
};

export default Character;