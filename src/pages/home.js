import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Home = async () => {
  const page = await getHash();
  const characters = await getData(page);

  let paginator = []
  for (let i = 1; i <= characters.info.pages; i++){
      paginator.push(i)
  }

  let a = 0;
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
    <div class="pages-content">
        <div class="pages-link">
          <h3>Pages:</h3>
            ${paginator.map(() => 
                `<a href="#/?page=${++a}/">${a}</a>`
            ).join('')}
        </div>
    </div>
    `;
  return view;
};

export default Home;