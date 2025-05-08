
import React, { useState, useRef } from 'react';
import { Movie } from '@/data/movies';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

interface MovieSwiperProps {
  movies: Movie[];
}

const MovieSwiper: React.FC<MovieSwiperProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [likedMovies, setLikedMovies] = useState<number[]>([]);

  const handleSwipe = (isLiked: boolean) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(isLiked ? 'right' : 'left');
    
    if (isLiked) {
      setLikedMovies(prev => [...prev, movies[currentIndex].id]);
      toast({
        title: "Filme adicionado!",
        description: `Você gostou de "${movies[currentIndex].title}"`,
      });
    }
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
      setDirection(null);
      setIsAnimating(false);
    }, 500); // Match with animation duration
  };

  if (movies.length === 0) {
    return <div className="text-center py-12">Nenhum filme disponível para exibição.</div>;
  }

  const movie = movies[currentIndex];
  
  // Determine animation class
  const animationClass = direction === 'right' 
    ? 'animate-card-swipe-right' 
    : direction === 'left' 
    ? 'animate-card-swipe-left' 
    : 'animate-card-enter';

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-md mx-auto mb-8">
        <div className="relative h-[500px]">
          <Card className={`absolute inset-0 border-2 border-movie-primary/20 shadow-xl overflow-hidden ${animationClass}`}>
            <div className="relative h-[350px]">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge className="bg-movie-secondary hover:bg-movie-secondary text-white">
                  {movie.rating.toFixed(1)}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-1">{movie.title} <span className="text-muted-foreground font-normal">({movie.year})</span></h2>
              <p className="text-sm text-muted-foreground mb-3">Diretor: {movie.director}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {movie.genre.map((genre) => (
                  <Badge key={genre} variant="outline" className="bg-muted/50">
                    {genre}
                  </Badge>
                ))}
              </div>
              
              <p className="text-sm line-clamp-3">{movie.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-4">
        <Button 
          size="lg"
          variant="outline"
          className="h-14 w-14 rounded-full border-movie-accent/30"
          onClick={() => handleSwipe(false)}
          disabled={isAnimating}
        >
          <ArrowLeft className="h-6 w-6 text-movie-accent" />
        </Button>
        
        <Button 
          size="lg"
          className="h-14 w-14 rounded-full bg-movie-secondary hover:bg-movie-secondary/90"
          onClick={() => handleSwipe(true)}
          disabled={isAnimating}
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="mt-8">
        <p className="text-center text-sm text-muted-foreground">
          Explorando filme {currentIndex + 1} de {movies.length}
        </p>
        {likedMovies.length > 0 && (
          <p className="text-center text-sm mt-2">
            Você curtiu {likedMovies.length} {likedMovies.length === 1 ? 'filme' : 'filmes'}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieSwiper;
