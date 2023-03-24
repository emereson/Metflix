import React from 'react'
import MoviesPopulation from '../src/components/Movies/MoviesPopulation'
import SeriesPopulation from '../src/components/series/SeriesPopulation'
import Trending from '../src/components/trending/Trending'

const Home = () => {
    return (
        <div>
            <Trending />
            <MoviesPopulation />
            <SeriesPopulation />
        </div>
    )
}

export default Home