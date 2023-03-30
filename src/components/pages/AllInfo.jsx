import React from 'react'
import MovieInfo from './MovieInfo'
import SerieInfo from './SerieInfo'

const AllInfo = () => {

    const validInfo = () => {
        if (!MovieInfo) {
            return <SerieInfo />

        } else {
            <MovieInfo />
        }
    }
    return (
        <div>
            {
                validInfo()
            }

        </div>
    )
}

export default AllInfo