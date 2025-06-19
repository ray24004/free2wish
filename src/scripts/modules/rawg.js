const baseUrl = 'https://api.rawg.io/api';
const key = 'c83cf761970b4d82bba3a7cb03e960cc';

async function get(endpoint, params) {
  const finalParams = params ? `&${params}` : '';
  const url = `${baseUrl}/${endpoint}?key=${key}${finalParams}`;
  const response = await fetch(url);
  return await response.json();
}

const rawg = {
  async getRatings(gameTitle) {
    const params = `search=${gameTitle}&search_exact=true&search_precise=true`;
    const search = await get('games', params);

    const { metacritic, esrb_rating, score } = search.results?.[0] || {};

    return {
      metacritic: metacritic || 'n/a',
      esrb_rating: esrb_rating?.name || 'n/a',
      score: score || 'n/a',
    };
  },
};

export default rawg;
