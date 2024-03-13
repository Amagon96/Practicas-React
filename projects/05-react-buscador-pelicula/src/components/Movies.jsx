export function Movies ({ movies }) {
    
    const hasMovies = movies?.length > 0

    return(
        hasMovies ?
            <ListOfMovies movies={movies}/> :
            <NoResults />
    )
}

const ListOfMovies = ({ movies }) => {
    return (
        <ul className='movies'>
            {
            movies.map(movie => (
                <li className='movie' key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt='Movie poster'/>
                </li>
            ))
            }
        </ul>
    )
}

const NoResults = () => {
    return (
        <h3>No movies were found 😪 </h3>
    )
}