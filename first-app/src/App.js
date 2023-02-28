
import { useEffect } from 'react'
import './App.css'
import searchIcon from './svg/search.svg'


const API_URL = 'http://www.omdbapi.com/?apikey=2cd05ad1'
const movie1 = {
  "Title": "White Chicks",
  "Year": "2004",
  "imdbID": "tt0381707",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_SX300.jpg"
}
const App = () => {

  //gets the movie search query and set it to an array 
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    console.log(title);
  }


  useEffect(() => {
    searchMovies('white chicks')

  }, []);

  return (
    <div className='app'>
      <h1>movieLand</h1>

      <div className="search">
        <input placeholder='Search for movies'
          value='superman'
          onChange={() => { }}>

        </input>
        <img src={searchIcon}
          alt="search icon" 
          onClick={() => { }}/>
          
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://placehold.jp/400x400.png'} alt='movie poster'/>
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;
