import freeToPlay from './modules/freeToPlay.js';

const thumbnail = document.querySelector('#thumbnail');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const genre = document.querySelector('#genre');
const year = document.querySelector('#year');
const site = document.querySelector('#site');

async function init() {
    const gameId = new URLSearchParams(window.location.search).get('id');
    const game = await freeToPlay.getGame(gameId);

    if (game.status == 0) {
        window.location.href = '/index';
    }

    thumbnail.src = game.screenshots[0].image;
    thumbnail.alt = `${game.title} screenshot`;

    title.textContent = game.title;
    description.textContent = game.description;
    genre.textContent = game.genre;
    year.textContent = game.release_date.split('-')[0];
    site.textContent = game.game_url.replace('https://www.', '');
    site.href = game.game_url;
}

init();
