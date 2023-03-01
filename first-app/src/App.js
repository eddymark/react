
import { useEffect, useState } from 'react'
import './App.css'
import searchIcon from './svg/search.svg'
import MovieCard from './Components/MovieCard'


const API_URL = 'http://www.omdbapi.com/?apikey=2cd05ad1'

const App = () => {
  //sets the states for the movie object
  const [movies, setMovies] = useState([]);
  //sets the states for the search
  const [searchTerm, setSearchTerm] = useState('');

  //gets the movie search query and set it to an array 
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }

  //adding for the on enter 

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchMovies(searchTerm);
      console.log('Enter key pressed');
    }
  }


  useEffect(() => {
    searchMovies('avengers')

  }, []);

  return (
    <div className='app'>
      <h1>movieLand</h1>

      <div className="search">
        <input placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        >

        </input>
        <img src={searchIcon}
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}

        />

      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) :
          (
            <div className="empty">
              <h2>no movies found </h2>
            </div>
          )
      }



    </div>
  )
}

export default App;
