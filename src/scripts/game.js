import freeToPlay from './modules/freeToPlay.js';
import rawg from './modules/rawg.js';

const screenshot = document.querySelector('#screenshot');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const genre = document.querySelector('#genre');
const year = document.querySelector('#year');
const site = document.querySelector('#site');

const esrb = document.querySelector('#esrb');
const metacritic = document.querySelector('#metacritic');
const score = document.querySelector('#score');

screenshot.addEventListener('load', () => {
  screenshot.hidden = false;
});

async function init() {
  const gameId = new URLSearchParams(window.location.search).get('id');
  const game = await freeToPlay.getGame(gameId);
  const rawgData = await rawg.getRatings(game.title);

  if (game.status == 0) {
    window.location.href = '/index';
  }

  screenshot.src = game.screenshots[0].image;
  screenshot.alt = `${game.title} screenshot`;
  screenshot.hidden = true;

  title.textContent = game.title;
  description.textContent = game.description;
  genre.textContent = game.genre;
  year.textContent = game.release_date.split('-')[0];
  site.textContent = game.game_url.replace('https://www.', '');
  site.href = game.game_url;

  esrb.textContent = rawgData.esrb_rating;
  metacritic.textContent = rawgData.metacritic;
  score.textContent = rawgData.score;
}

init();
