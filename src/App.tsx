// src/App.tsx
import React, { useState } from 'react';
import GenreList from './components/GenreList.tsx';
import GenreDetails from './components/GenreDetails.tsx';
import './App.css'; // Import the stylesheet

  const App: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<{ id: number | null; name: string | null }>({
      id: null,
      name: null,
    });
  
    const handleGenreSelect = (genreId: number, genreName: string) => {
      setSelectedGenre({ id: genreId, name: genreName });
    };

  return (
    <div>
        <div className="header">
            <h1>Movie Portal</h1>
        </div>
        <div className="app-container">
            <GenreList onGenreSelect={handleGenreSelect} />
            <GenreDetails selectedGenre={selectedGenre} />
        </div>
    </div>
  );
};

export default App;
