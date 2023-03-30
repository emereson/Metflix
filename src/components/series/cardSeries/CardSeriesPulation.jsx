import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setserieInfo } from '../../../store/slices/serieInfo'
import { setvalidMoviesOrSeries } from '../../../store/slices/validMoviesOrSeries'
import audio from '/movement.mp3'
import ReactHowler from 'react-howler'


const CardSeriesPulation = ({ seriePopulation, imgSelected }) => {
    const urlImage = 'https://image.tmdb.org/t/p/original/'

    const [sond, setsond] = useState(false)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setserieInfo(seriePopulation.id))
        dispatch(setvalidMoviesOrSeries('serie'))
    }

    const styleMovent = {
        transform: `translateX(calc(-${imgSelected}/1* 100%))`,
        width: `${seriePopulation.length * 100}%`
    }

    const mouseSond = () => {
        setsond(true)
    }


    return (
        <div style={styleMovent} className='allCard__container'>
            <ReactHowler
                src={audio}
                playing={sond}
                volume={0.3}
            />
            <header className='allCard__header' >
                <div className='allCard__imgContainer'>
                    <img onMouseOver={mouseSond} onMouseOut={() => { setsond(false) }} onClick={handleClick} className='allCard_img' src={`${urlImage}${seriePopulation.poster_path ? seriePopulation.poster_path : seriePopulation.backdrop_path}`} alt="" />
                </div>
            </header>
        </div>
    )
}

export default CardSeriesPulation