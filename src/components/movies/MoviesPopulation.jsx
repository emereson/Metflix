import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMoviesPopulation from './cardMovies/CardMoviesPopulation'


const MoviesPopulation = () => {
    const [moviePopulations, setmoviePopulations] = useState()
    const [page, setpage] = useState(1)

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&page=${page}`;
        axios
            .get(url)
            .then((res) => setmoviePopulations(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {
                moviePopulations?.results.map(moviePopulation => (
                    <CardMoviesPopulation
                        key={moviePopulation.id}
                        moviePopulation={moviePopulation}
                    />
                ))
            }

        </div>
    )
}

export default MoviesPopulation