
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MovieCard from '@/components/MovieCard';
import { Button } from '@/components/ui/button';
import { getTrendingMovies, getRecommendedMovies, getAllGenres } from '@/data/movies';
import { Link } from 'react-router-dom';

const Index = () => {
  const trendingMovies = getTrendingMovies(5);
  const recommendedMovies = getRecommendedMovies(6);
  const genres = getAllGenres().slice(0, 6); // Get first 6 genres
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Trending Movies */}
        <section className="py-16 bg-gradient-to-b from-movie-primary/70 to-background">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Filmes em Alta</h2>
              <Link to="/discover">
                <Button variant="ghost" className="text-movie-secondary">
                  Ver Todos
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {trendingMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Explorar por Categoria</h2>
              <Link to="/categories">
                <Button variant="ghost" className="text-movie-secondary">
                  Ver Todas Categorias
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {genres.map((genre) => (
                <Link 
                  key={genre} 
                  to={`/categories/${genre.toLowerCase()}`}
                  className="bg-gradient-to-br from-movie-primary to-movie-accent/50 rounded-lg p-6 text-center transition-transform hover:scale-105 duration-300"
                >
                  <h3 className="font-medium text-white">{genre}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Recommended Movies */}
        <section className="py-16 bg-gradient-to-t from-movie-primary/30 to-background">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Recomendados para Você</h2>
              <Link to="/discover">
                <Button variant="ghost" className="text-movie-secondary">
                  Descobrir Mais
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {recommendedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-16 bg-movie-primary">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para Encontrar seu Próximo Filme Favorito?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Use nossa interface estilo Tinder para descobrir novos filmes de forma divertida e interativa.
              Deslize para a direita nos que você gosta, e para a esquerda nos que não interessam.
            </p>
            <Link to="/discover">
              <Button size="lg" className="bg-movie-secondary hover:bg-movie-secondary/90 text-white">
                Começar a Explorar Filmes
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
