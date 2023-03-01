import react from 'react'


const MovieCard = ({ movie }) => {

    return (

       
        // An img element that displays the movie's poster image. The src attribute of the img element is set based on the movie.Poster property. If movie.Poster is not equal to 'N/A', then it will display the URL of the poster. If movie.Poster is 'N/A', then it will display a placeholder image with the URL 'https://placehold.jp/400x400.png'.

        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.jp/400x400.png'} alt='movie poster' />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard