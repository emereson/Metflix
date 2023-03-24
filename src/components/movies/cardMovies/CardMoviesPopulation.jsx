import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartMoviesPopulation = ({ moviePopulation }) => {
    const urlImage = 'https://image.tmdb.org/t/p/w500/'
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/movie/info/${moviePopulation.id}`)
    }
    return (
        <div>
            <header >
                <img onClick={handleClick} src={`${urlImage}${moviePopulation.poster_path ? moviePopulation.poster_path : moviePopulation.backdrop_path}`} alt="" />
                <h3>{moviePopulation.title}</h3>
                <span>{moviePopulation.vote_average}</span>
                <h4>{moviePopulation.release_date}</h4>
            </header>
        </div>
    )
}

export default CartMoviesPopulation