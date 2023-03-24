import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardSerieInfo = () => {
    const urlImage = 'https://image.tmdb.org/t/p/w500'

    const [serieInfo, setserieInfo] = useState()
    const { id } = useParams()

    useEffect(() => {
        const urlmovie = `https://api.themoviedb.org/3/tv/${id}?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES`

        axios.get(urlmovie, id)
            .then(res => setserieInfo(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <header>
                <div>
                    <img src={`${urlImage}${serieInfo?.poster_path ? serieInfo?.poster_path : serieInfo?.backdrop_path}`} alt="" />
                </div>
                <h1>{serieInfo?.name} <p>{serieInfo?.first_air_date}</p></h1>
                <div>
                    <p>{serieInfo?.first_air_date}</p>
                    {
                        serieInfo?.production_countries.map(production => (
                            <ul key={production.iso_3166_1}>
                                <li>
                                    ({production.name})
                                </li>
                            </ul>

                        ))
                    }
                    {
                        serieInfo?.genres.map(gender => (
                            <ul key={gender.id}>
                                <li>
                                    {gender.name}
                                </li>
                            </ul>
                        ))
                    }
                </div>
                <div>
                    <span>{serieInfo?.vote_average}</span>
                    <p>User <br />Score</p>
                </div>
                <div>
                    <h2>Overview</h2>
                    <p>{serieInfo?.overview}</p>
                </div>
            </header>
        </div>
    )
}

export default CardSerieInfo