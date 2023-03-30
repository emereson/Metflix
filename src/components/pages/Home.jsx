import React from 'react'
import MoviesTop from '../movies/MoviesTop'
import MoviesPopulation from '../movies/MoviesPopulation'
import SeriesTop from '../series/SeriesTop'
import SeriesPopulation from '../series/SeriesPopulation'


const Home = () => {
    return (
        <div className='Container__home'>
            <h2>Home</h2>
            <MoviesPopulation />
            <SeriesPopulation />
            <MoviesTop />
            <SeriesTop />
        </div>
    )
}

export default Home