import React from 'react'
import SeriesGenres from '../series/SeriesGenres'
import SeriesOnline from '../series/SeriesOnline'
import SeriesPopulation from '../series/SeriesPopulation'
import SeriesTop from '../series/SeriesTop'

const Series = () => {
    return (
        <div className='Series__container'>
            <SeriesGenres />
            <SeriesTop />
            <SeriesOnline />
            <SeriesPopulation />

        </div>
    )
}

export default Series