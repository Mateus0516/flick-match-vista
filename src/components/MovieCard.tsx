
import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '@/data/movies';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block transition-transform hover:scale-105 duration-300">
      <div className="movie-card h-full">
        <div className="movie-card-inner relative h-full rounded-lg overflow-hidden">
          <div className="movie-card-front h-full">
            <Card className="border-0 shadow-lg h-full overflow-hidden">
              <div className="relative h-[320px] overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <h3 className="font-bold text-white">{movie.title}</h3>
                  <p className="text-xs text-white/75">{movie.year}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge className="bg-movie-secondary hover:bg-movie-secondary">
                    {movie.rating.toFixed(1)}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="movie-card-back absolute top-0 left-0 w-full h-full">
            <Card className="border-0 shadow-lg h-full bg-movie-primary/90 text-white p-4">
              <CardContent className="p-0 flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                  <p className="text-xs text-white/75 mb-2">Director: {movie.director}</p>
                  <p className="text-sm line-clamp-4">{movie.description}</p>
                </div>
                
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1">
                    {movie.genre.map((genre) => (
                      <Badge key={genre} variant="outline" className="border-movie-secondary text-white">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
