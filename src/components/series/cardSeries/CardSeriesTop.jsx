import React from 'react'
import { useDispatch } from 'react-redux'
import { setserieInfo } from '../../../store/slices/serieInfo'
import { setvalidMoviesOrSeries } from '../../../store/slices/validMoviesOrSeries'

const CardSeriesTop = ({ serieTopRated, imgSelected }) => {
    const urlImage = 'https://image.tmdb.org/t/p/original/'

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setserieInfo(serieTopRated.id))
        dispatch(setvalidMoviesOrSeries('serie'))
    }

    const styleMovent = {
        transform: `translateX(calc(-${imgSelected}/1* 100%))`,
        width: `${serieTopRated.length * 100}%`
    }

    return (
        <div style={styleMovent} className='allCard__container'>
            <header className='allCard__header' >
                <div className='allCard__imgContainer'>
                    <img onClick={handleClick} className='allCard_img' src={`${urlImage}${serieTopRated.poster_path ? serieTopRated.poster_path : serieTopRated.backdrop_path}`} alt="" />
                </div>
            </header>
        </div>
    )
}

export default CardSeriesTop