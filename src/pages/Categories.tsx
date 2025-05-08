
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { getAllGenres, getMoviesByGenre } from '@/data/movies';

const Categories = () => {
  const genres = getAllGenres();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Categorias de <span className="text-movie-secondary">Filmes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Explore nosso catálogo por gêneros e encontre seu próximo filme favorito.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {genres.map((genre) => {
              const movieCount = getMoviesByGenre(genre).length;
              
              return (
                <Link 
                  key={genre}
                  to={`/categories/${genre.toLowerCase()}`}
                  className="group relative h-48 overflow-hidden rounded-xl"
                >
                  {/* Background image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-movie-primary/90 to-movie-accent/70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{genre}</h3>
                    <p className="text-white/80">{movieCount} {movieCount === 1 ? 'filme' : 'filmes'}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
