
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MovieSwiper from '@/components/MovieSwiper';
import { movies } from '@/data/movies';

const Discover = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Descubra Filmes <span className="text-movie-secondary">Deslizando</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Deslize para a direita nos filmes que você gostaria de assistir e para a esquerda nos que não interessam.
            </p>
          </div>
          
          <MovieSwiper movies={movies} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discover;
