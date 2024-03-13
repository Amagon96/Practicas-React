import { useCallback, useState } from 'react';
import './App.css'
import { Movies } from './components/Movies'
import { useMovie } from './hooks/useMovie'
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';

function App() {
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies } = useMovie({search});

  const debouncedGetMovies = useCallback(
    debounce((search) => getMovies({ search }), 200), []
  )
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => { 
    const newQuery = event.target.value;
    setSearch(newQuery)
    debouncedGetMovies(newQuery)
  } 

  return (
    <div className='page'>
      <header>
        <h1>
          Movies Finder
        </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} name='query' placeholder='Avenger, Star Wars, The Matrix...'/>
          {/* <input type='checkbox' onChange={handleSort} checked={sort}/> */}
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
