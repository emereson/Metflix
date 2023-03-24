import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardTrending from './cardTrending/CardTrending'

const Trending = () => {
    const [trendings, settrendings] = useState()
    const [page, setpage] = useState(1)

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES&page=${page}`
        axios
            .get(url)
            .then((res) => settrendings(res.data))
            .catch((err) => console.log(err))
    }, [])
    console.log(trendings);
    return (
        <div>
            {
                trendings?.results.map(trending => (
                    <CardTrending
                        key={trending.id}
                        trending={trending}
                    />
                ))
            }
        </div>
    )
}

export default Trending