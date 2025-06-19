const wishlistKey = 'wishlist';

let games = {};

function saveWishlist() {
    localStorage.setItem(wishlistKey, JSON.stringify(games));
}

function loadWishlist() {
    const json = localStorage.getItem(wishlistKey);

    
    if (!json) {
        games = {};
    }
    else {
        games = JSON.parse(json);
    }
}

loadWishlist();

const wishlist = {
    getGames() {
        return games;
    },

    addGame(gameId) {
        games[gameId.toString()] = true;
        saveWishlist();
    },

    removeGame(gameId) {
        delete games[gameId.toString()];
        saveWishlist();
    },

    includes(gameId) {
        return games[gameId.toString()];
    }
}

export default wishlist;