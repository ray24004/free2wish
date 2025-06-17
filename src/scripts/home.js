import freeToPlay from './modules/freeToPlay.js';

const gameGrid = document.querySelector('#gameGrid');
const gameTemplate = document.querySelector('#gameTemplate');
const loadGamesButton = document.querySelector('#loadGamesButton');
const searchInput = document.querySelector('#search');

let gameList = [];
let filteredGameList = [];
let gamesStart = 0;
let gamesCount = 6;

freeToPlay.getGames().then((games) => {
  gameList = games;
  filterResults();
  loadMoreGames();
});

loadGamesButton.addEventListener('click', loadMoreGames);

function loadMoreGames() {
  const gamesEnd = gamesStart + gamesCount;
  const gamesBatch = filteredGameList.slice(gamesStart, gamesEnd);

  for (const game of gamesBatch) {
    const gameItem = gameTemplate.content.cloneNode(true);

    gameItem.querySelector('h2').innerHTML = game.title;
    gameItem.querySelector('img').src = game.thumbnail;
    gameItem.querySelector('.year').innerHTML = game.release_date.split('-')[0];
    gameItem.querySelector('.genre').innerHTML = game.genre;
    gameItem.querySelector('a').href = `/game?id=${game.id}`;

    gameGrid.appendChild(gameItem);
  }
  gamesStart += gamesCount;

  loadGamesButton.hidden = gamesEnd >= gamesBatch.length;
}

searchInput.addEventListener('input', filterResults);

function filterResults() {
  if (searchInput.value === '') {
    filteredGameList = gameList;
  } else {
    filteredGameList = gameList.filter((g) =>
      g.title.toLowerCase().includes(searchInput.value.toLowerCase()),
    );
  }

  gameGrid.innerHTML = '';
  gamesStart = 0;
  loadMoreGames();
}
