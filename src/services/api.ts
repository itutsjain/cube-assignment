// src/services/api.ts
const API_KEY = '1435e9957166a27ce5b8454de34e2591'; 

// Fetch the list of genres
export const getGenres = async (): Promise<Genre[]> => {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const genres: Genre[] = data.genres;
    return genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};

// Fetch movies based on the selected genre ID
export const getMoviesByGenreId = async (genreId: number): Promise<Movie[]> => {
  const genreIdString = genreId.toString();
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreIdString}&api_key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Assuming the movie data is in the 'results' property of the response
    const movies: Movie[] = data.results;
    return movies;
  } catch (error) {
    console.error('Error fetching movies by genre ID:', error);
    throw error;
  }
};

// Define interfaces for genres and movies
export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  // Add more properties as needed
}

//export { getGenres, getMoviesByGenreId };
