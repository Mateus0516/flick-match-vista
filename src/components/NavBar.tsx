
import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Film className="h-6 w-6 text-movie-secondary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-movie-secondary to-movie-accent">
              FlickMatch
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-movie-secondary transition-colors">
            Home
          </Link>
          <Link to="/discover" className="text-sm font-medium hover:text-movie-secondary transition-colors">
            Discover
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-movie-secondary transition-colors">
            Categories
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/discover">
            <Button variant="outline" className="hidden sm:flex border-movie-secondary text-movie-secondary hover:bg-movie-secondary hover:text-white transition-all">
              Find Movies
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
