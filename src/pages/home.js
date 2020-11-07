import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="characters-count">
      Characters: <span>${characters.info.count}</span>
    </div>
    <div class="characters">
      ${characters.results.map(character => `
      <article class="character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" height="250" alt="${character.name}">
          <h3>${character.name}</h3>
        </a>
      </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;