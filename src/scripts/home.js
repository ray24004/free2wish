import freeToPlay from './modules/freeToPlay.js';

const gameGrid = document.querySelector('#gameGrid');
const gameTemplate = document.querySelector('#gameTemplate');
const loadGamesButton = document.querySelector('#loadGamesButton');

let gameList = [];
let gamesStart = 0;
let gamesCount = 6;

freeToPlay.getGames().then((games) => {
  gameList = games;
  loadMoreGames();
});

function loadMoreGames() {
  let gamesPage = gameList.slice(gamesStart, gamesStart + gamesCount);
  for (const game of gamesPage) {
    const gameItem = gameTemplate.content.cloneNode(true);

    gameItem.querySelector('h2').innerHTML = game.title;
    gameItem.querySelector('img').src = game.thumbnail;
    gameItem.querySelector('.year').innerHTML = game.release_date.split('-')[0];
    gameItem.querySelector('.genre').innerHTML = game.genre;
    gameItem.querySelector('a').href = `/game?id=${game.id}`

    gameGrid.appendChild(gameItem);
  }
  gamesStart += gamesCount;
}

loadGamesButton.addEventListener('click', loadMoreGames);
