
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Film, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-movie-primary to-transparent opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 bg-movie-secondary/20 px-4 py-2 rounded-full">
            <Film className="h-4 w-4 text-movie-secondary" />
            <span className="text-sm font-medium text-white">Encontre seu filme perfeito</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Descubra Filmes da Maneira <span className="text-movie-secondary">Mais Divertida</span>
          </h1>
          
          <p className="text-lg text-white/80 mb-8">
            Deslize, combine e descubra filmes que combinam com seu gosto. 
            Nossa plataforma estilo Tinder para filmes torna a busca pelo próximo favorito mais divertida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/discover">
              <Button size="lg" className="bg-movie-secondary hover:bg-movie-secondary/90 text-white">
                Começar a Explorar
              </Button>
            </Link>
            <Link to="/categories">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ver Categorias
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex items-center gap-2">
            <Play className="h-4 w-4 text-movie-secondary" />
            <span className="text-sm text-white/70">Mais de 1000 filmes para explorar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
