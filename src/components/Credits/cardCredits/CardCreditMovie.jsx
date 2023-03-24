import React from 'react'

const CardCreditMovie = ({ movieCredit }) => {
    const urlImage = 'https://image.tmdb.org/t/p/w500'

    const iconOrImg = () => {
        if (!movieCredit.profile_path) {
            return <i className='bx bxs-user' ></i >
        } else {
            return <img src={`${urlImage}${movieCredit.profile_path}`} alt="" />
        }
    }
    return (

        <header>
            <h2>Top Billes Cast</h2>
            <article >
                {
                    iconOrImg()
                }
                <span>
                    <h3>Actor :{movieCredit.name}</h3>
                    <h4>Personaje: {movieCredit.character}</h4>
                </span>
            </article>

        </header >

    )
}

export default CardCreditMovie