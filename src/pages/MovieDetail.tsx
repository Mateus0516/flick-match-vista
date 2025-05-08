
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getMovieById, getRecommendedMovies } from '@/data/movies';
import MovieCard from '@/components/MovieCard';
import { ArrowLeft } from 'lucide-react';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const movie = getMovieById(parseInt(id || '0'));
  const recommendedMovies = getRecommendedMovies(4);
  
  if (!movie) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow py-8">
          <div className="container text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Filme não encontrado</h1>
            <p className="mb-8">O filme que você está procurando não está disponível.</p>
            <Link to="/">
              <Button>Voltar para a Página Inicial</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero section with movie poster and info */}
        <div className="relative">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/30"></div>
          </div>
          
          <div className="container relative z-10 pt-8 pb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar</span>
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Movie Poster */}
              <div className="w-full md:w-1/3 lg:w-1/4">
                <div className="rounded-lg overflow-hidden shadow-lg border-2 border-white/10">
                  <img 
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Movie Info */}
              <div className="w-full md:w-2/3 lg:w-3/4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{movie.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{movie.year} • Diretor: {movie.director}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-movie-secondary hover:bg-movie-secondary text-white text-lg py-1 px-3">
                    {movie.rating.toFixed(1)}
                  </Badge>
                  
                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map(genre => (
                      <Link key={genre} to={`/categories/${genre.toLowerCase()}`}>
                        <Badge variant="outline" className="hover:bg-muted/20 transition-colors">
                          {genre}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="bg-card/40 backdrop-blur-sm rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-medium mb-3">Sinopse</h2>
                  <p className="text-muted-foreground">{movie.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-movie-secondary hover:bg-movie-secondary/90">
                    Adicionar à Lista
                  </Button>
                  <Button variant="outline">
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recommended Movies Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Filmes Semelhantes</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {recommendedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MovieDetail;
