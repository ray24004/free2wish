const baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'da5a0a4fbcmshbca012d0afd7b48p13dd3djsnd8c3217ce1e6',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

async function get(endpoint) {
  const url = `${baseUrl}/${endpoint}`;
  const response = await fetch(url, options);
  return await response.json();
}

// Expose abstracted API functions

const freeToPlay = {
  async getGames() {
    return await get('games');
  },

  async getGame(gameId) {
    return await get(`game?id=${gameId}`);
  },
};
export default freeToPlay;
