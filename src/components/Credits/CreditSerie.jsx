import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCreditSerie from './cardCredits/CardCreditSerie'

const CreditSerie = () => {
    const [serieCredits, setserieCredits] = useState()
    const { id } = useParams()

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=c3d737df0f14dab49e5201c9bd5a331f&language=en-US`
        axios.get(url, id)
            .then(res => setserieCredits(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                serieCredits?.cast.map(serieCredit => (
                    <CardCreditSerie
                        key={serieCredit?.id}
                        serieCredit={serieCredit}
                    />
                ))
            }
        </div>
    )
}

export default CreditSerie