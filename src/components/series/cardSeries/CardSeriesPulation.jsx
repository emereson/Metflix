import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardSeriesPulation = ({ seriePopulation }) => {
    const urlImage = 'https://image.tmdb.org/t/p/w500/'
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/serie/info/${seriePopulation.id}`)
    }
    return (
        <div>
            <header >
                <img onClick={handleClick} src={`${urlImage}${seriePopulation.poster_path ? seriePopulation.poster_path : seriePopulation.backdrop_path}`} alt="" />
                <h3>{seriePopulation.name}</h3>
                <span>{seriePopulation.vote_average}</span>
                <h4>{seriePopulation.release_date}</h4>
            </header>
        </div>
    )
}

export default CardSeriesPulation