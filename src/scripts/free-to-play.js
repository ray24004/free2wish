export async function fetchGames() {
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