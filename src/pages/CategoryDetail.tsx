
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MovieCard from '@/components/MovieCard';
import { getMoviesByGenre } from '@/data/movies';

const CategoryDetail = () => {
  const { genreName } = useParams<{ genreName: string }>();
  
  // Convert URL parameter to proper case for matching
  const formattedGenreName = genreName 
    ? genreName.charAt(0).toUpperCase() + genreName.slice(1).toLowerCase() 
    : '';
  
  const movies = getMoviesByGenre(formattedGenreName);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Filmes de <span className="text-movie-secondary">{formattedGenreName}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {movies.length} {movies.length === 1 ? 'filme encontrado' : 'filmes encontrados'} nesta categoria.
            </p>
          </div>
          
          {movies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg">Nenhum filme encontrado para esta categoria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryDetail;
