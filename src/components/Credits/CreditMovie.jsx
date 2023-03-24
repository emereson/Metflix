import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCreditMovie from './cardCredits/CardCreditMovie'

const CreditMovie = () => {
    const [movieCredits, setmovieCredits] = useState()
    const { id } = useParams()

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-US`
        axios.get(url, id)
            .then(res => setmovieCredits(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                movieCredits?.cast.map(movieCredit => (
                    <CardCreditMovie
                        key={movieCredit?.id}
                        movieCredit={movieCredit}
                    />
                ))
            }
        </div>
    )
}

export default CreditMovie