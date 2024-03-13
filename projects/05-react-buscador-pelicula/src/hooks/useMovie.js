import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies';

export function useMovie({ search, sort }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

    const getMovies = useCallback(async ({ search }) => {
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
    }, [])

  
    return { movies, getMovies }
  }