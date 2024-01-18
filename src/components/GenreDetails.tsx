// src/components/GenreDetails.tsx
import React, { useState, useEffect } from 'react';
import { getMoviesByGenreId, Movie } from '../services/api.ts';

interface GenreDetailsProps {
  selectedGenre: { id: number | null; name: string | null };
}

const GenreDetails: React.FC<GenreDetailsProps> = ({ selectedGenre }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (selectedGenre.id !== null) {
        try {
          const data = await getMoviesByGenreId(selectedGenre.id);
          setMovies(data);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }
    };

    fetchMovies();
  }, [selectedGenre.id]);

  return (
    <div className="genre-details-container">
      {selectedGenre.id !== null ? (
        <>
          <h2>{selectedGenre.name} Genre</h2>
          <div className="movie-grid">
            {movies.slice(0, 9).map((movie) => (
              <div key={movie.id} className="movie-item">
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                  />
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2>Select a genre from the list</h2>
      )}
    </div>
  );
};

export default GenreDetails;
