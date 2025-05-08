
export interface Movie {
  id: number;
  title: string;
  poster: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  description: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Matrix",
    poster: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    rating: 8.7,
    director: "Lana Wachowski, Lilly Wachowski",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    id: 2,
    title: "Inception",
    poster: "https://source.unsplash.com/photo-1500673922987-e212871fec22",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    director: "Christopher Nolan",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: 3,
    title: "Interstellar",
    poster: "https://source.unsplash.com/photo-1506744038136-46273834b3fb",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    director: "Christopher Nolan",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 4,
    title: "The Godfather",
    poster: "https://source.unsplash.com/photo-1470813740244-df37b8c1edcb",
    year: 1972,
    genre: ["Crime", "Drama"],
    rating: 9.2,
    director: "Francis Ford Coppola",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    id: 5,
    title: "Pulp Fiction",
    poster: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    year: 1994,
    genre: ["Crime", "Drama"],
    rating: 8.9,
    director: "Quentin Tarantino",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    id: 6,
    title: "The Dark Knight",
    poster: "https://source.unsplash.com/photo-1470813740244-df37b8c1edcb",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    director: "Christopher Nolan",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    id: 7,
    title: "Forrest Gump",
    poster: "https://source.unsplash.com/photo-1506744038136-46273834b3fb", 
    year: 1994,
    genre: ["Drama", "Romance"],
    rating: 8.8,
    director: "Robert Zemeckis",
    description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75."
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    poster: "https://source.unsplash.com/photo-1500673922987-e212871fec22",
    year: 1994,
    genre: ["Drama"],
    rating: 9.3,
    director: "Frank Darabont",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 9,
    title: "La La Land",
    poster: "https://source.unsplash.com/photo-1500673922987-e212871fec22",
    year: 2016,
    genre: ["Comedy", "Drama", "Music"],
    rating: 8.0,
    director: "Damien Chazelle",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
  },
  {
    id: 10,
    title: "Avengers: Endgame",
    poster: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    year: 2019,
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.4,
    director: "Anthony Russo, Joe Russo",
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
  },
  {
    id: 11,
    title: "The Silence of the Lambs",
    poster: "https://source.unsplash.com/photo-1470813740244-df37b8c1edcb",
    year: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.6,
    director: "Jonathan Demme",
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
  },
  {
    id: 12,
    title: "The Grand Budapest Hotel",
    poster: "https://source.unsplash.com/photo-1506744038136-46273834b3fb",
    year: 2014,
    genre: ["Adventure", "Comedy", "Crime"],
    rating: 8.1,
    director: "Wes Anderson",
    description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge."
  }
];

export const getMoviesByGenre = (genre: string): Movie[] => {
  return movies.filter(movie => movie.genre.includes(genre));
};

export const getMovieById = (id: number): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

export const getAllGenres = (): string[] => {
  const genres = new Set<string>();
  movies.forEach(movie => {
    movie.genre.forEach(g => genres.add(g));
  });
  return Array.from(genres).sort();
};

export const getRecommendedMovies = (count: number = 6): Movie[] => {
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getTrendingMovies = (count: number = 5): Movie[] => {
  return [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
};
