import React from 'react'
import { useDispatch } from 'react-redux'
import { setserieInfo } from '../../../store/slices/serieInfo'
import { setvalidMoviesOrSeries } from '../../../store/slices/validMoviesOrSeries'

const CardSeriesOnline = ({ serieOnline, imgSelected }) => {
    const urlImage = 'https://image.tmdb.org/t/p/original/'

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setserieInfo(serieOnline.id))
        dispatch(setvalidMoviesOrSeries('serie'))
    }

    const styleMovent = {
        transform: `translateX(calc(-${imgSelected}/1* 100%))`,
        width: `${serieOnline.length * 100}%`
    }
    return (
        <div style={styleMovent} className='allCard__container'>
            <header className='allCard__header' >
                <div className='allCard__imgContainer'>
                    <img onClick={handleClick} className='allCard_img' src={`${urlImage}${serieOnline.poster_path ? serieOnline.poster_path : serieOnline.backdrop_path}`} alt="" />
                </div>
            </header>
        </div>
    )
}

export default CardSeriesOnline