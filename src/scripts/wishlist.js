import freeToPlay from './modules/freeToPlay';
import wishlist from './modules/wishlist';

const gameGrid = document.querySelector('#gameGrid');
const gameTemplate = document.querySelector('#gameTemplate');

init();

async function init() {
    const gameData = await freeToPlay.getGames();
    const filteredGames = gameData.filter(g => wishlist.includes(g.id));
    displayGames(filteredGames);
}

function displayGames(games) {
  for (const game of games) {
    const gameItem = gameTemplate.content.cloneNode(true);

    gameItem.querySelector('h2').innerHTML = game.title;
    gameItem.querySelector('img').src = game.thumbnail;
    gameItem.querySelector('.year').innerHTML = game.release_date.split('-')[0];
    gameItem.querySelector('.genre').innerHTML = game.genre;
    gameItem.querySelector('a').href = `/game?id=${game.id}`;

    gameGrid.appendChild(gameItem);
  }
}