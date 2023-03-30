import React from 'react'
import { useDispatch } from 'react-redux'
import { setmovieInfo } from '../../../store/slices/movieInfo'
import { setvalidMoviesOrSeries } from '../../../store/slices/validMoviesOrSeries'

const CardMoviesTop = ({ movieTopRated, imgSelected }) => {
    const urlImage = 'https://image.tmdb.org/t/p/original/'

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setmovieInfo(movieTopRated.id))
        dispatch(setvalidMoviesOrSeries('movie'))
    }

    const styleMovent = {
        transform: `translateX(calc(-${imgSelected}/1* 100%))`,
        width: `${movieTopRated.length * 100}%`
    }

    return (
        <div style={styleMovent} className='allCard__container'>
            <header className='allCard__header' >
                <div className='allCard__imgContainer'>
                    <img onClick={handleClick} className='allCard_img' src={`${urlImage}${movieTopRated.poster_path ? movieTopRated.poster_path : movieTopRated.backdrop_path}`} alt="" />
                </div>
            </header>
        </div>
    )
}

export default CardMoviesTop