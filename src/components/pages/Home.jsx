import React from 'react'
import MoviesTop from '../movies/MoviesTop'
import MoviesPopulation from '../movies/MoviesPopulation'
import Trending from '../trending/Trending'
import SeriesTop from '../series/SeriesTop'
import SeriesPopulation from '../series/SeriesPopulation'


const Home = () => {
    return (
        <div className='Container__home'>
            <Trending />
            <MoviesPopulation />
            <SeriesPopulation />
            <MoviesTop />
            <SeriesTop />
        </div>
    )
}

export default Home