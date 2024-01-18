// src/components/GenreList.tsx
import React, { useState, useEffect } from 'react';
import { getGenres, Genre } from '../services/api.ts';

interface GenreListProps {
    onGenreSelect: (genreId: number, genreName: string) => void;
}
  

const GenreList: React.FC<GenreListProps> = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    // Fetch the list of genres
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="genre-list-container">
      <ul>
        {genres.map((genre) => (
          <li key={genre.id} onClick={() => onGenreSelect(genre.id,genre.name)}>
            <h3>{genre.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
