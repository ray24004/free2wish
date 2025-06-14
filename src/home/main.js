const gameGrid = document.querySelector('#gameGrid');
const gameTemplate = document.querySelector('#gameTemplate');
const loadGamesButton = document.querySelector('#loadGamesButton');

async function fetchGames() {
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'da5a0a4fbcmshbca012d0afd7b48p13dd3djsnd8c3217ce1e6',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);
  return await response.json();
}

const games = await fetchGames();

let gamesStart = 0;
let gamesCount = 6;

function loadMoreGames() {
    let gamesPage = games.slice(gamesStart, gamesStart + gamesCount);
    for (const game of gamesPage) {
      const gameItem = gameTemplate.content.cloneNode(true);
    
      gameItem.querySelector('h2').innerHTML = game.title;
      gameItem.querySelector('img').src = game.thumbnail;
      gameItem.querySelector('.year').innerHTML = game.release_date.split('-')[0];
      gameItem.querySelector('.genre').innerHTML = game.genre;
    
      gameGrid.appendChild(gameItem);
    }
    gamesStart += gamesCount;
}

loadMoreGames();

loadGamesButton.addEventListener('click', loadMoreGames);