import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardTrending = ({ trending }) => {
    const urlImage = 'https://image.tmdb.org/t/p/w500/'
    const navigate = useNavigate()

    const handleClick = () => {
        if (trending.media_type === "movie") {
            return navigate(`/movie/info/${trending.id}`)
        } else {
            return navigate(`/serie/info/${trending.id}`)
        }
    }
    return (
        <header >
            <img onClick={handleClick} src={`${urlImage}${trending.poster_path ? trending.poster_path : trending.backdrop_path}`} alt="" />
            <h3>{trending.title ? trending.title : trending.name}</h3>
            <span>{trending.vote_average}</span>
            <h4>{trending.release_date ? trending.release_date : trending.first_air_date}</h4>
        </header>
    )
}

export default CardTrending