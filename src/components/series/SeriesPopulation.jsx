import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardSeriesPulation from './cardSeries/CardSeriesPulation'

const SeriesPopulation = () => {
    const [seriePopulations, setseriePopulations] = useState()
    const [page, setpage] = useState(1)

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/tv/popular?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&page=${page}`;
        axios
            .get(url)
            .then((res) => setseriePopulations(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            {
                seriePopulations?.results.map(seriePopulation => (
                    <CardSeriesPulation
                        key={seriePopulation.id}
                        seriePopulation={seriePopulation}
                    />
                ))
            }
        </div>
    )
}

export default SeriesPopulation