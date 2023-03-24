import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardMovieInfo = () => {
    const urlImage = 'https://image.tmdb.org/t/p/w500'

    const [movieInfo, setmovieInfo] = useState()
    const { id } = useParams()

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=es-ES`

        axios.get(url, id)
            .then(res => setmovieInfo(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <header>
                <div>
                    <img src={`${urlImage}${movieInfo?.poster_path ? movieInfo?.poster_path : movieInfo?.backdrop_path}`} alt="" />
                </div>
                <h1>{movieInfo?.title} <p>{movieInfo?.release_date}</p></h1>
                <div>
                    <span>
                        <p>{movieInfo?.release_date}</p>
                        <p>({movieInfo?.production_countries[0].iso_3166_1})</p>
                        {
                            movieInfo?.genres.map(gender => (
                                <p key={gender.id}>{gender.name},</p>
                            ))
                        }
                    </span>
                </div>
                <div>
                    <span>{movieInfo?.vote_average}</span>
                    <p>User <br />Score</p>
                </div>
                <div>
                    <h2>Overview</h2>
                    <p>{movieInfo?.overview}</p>
                </div>
            </header>
        </div>
    )
}

export default CardMovieInfo