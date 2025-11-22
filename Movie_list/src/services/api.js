const API_KEY = "6111f7f0d41a8eed0dc79f7ad919f5df";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
} 

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/serach/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
} 