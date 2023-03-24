import React from 'react'

const CardCreditSerie = ({ serieCredit }) => {
    const urlImage = 'https://image.tmdb.org/t/p/w500'

    const iconOrImg = () => {
        if (!serieCredit.profile_path) {
            return <i className='bx bxs-user' ></i >
        } else {
            return <img src={`${urlImage}${serieCredit.profile_path}`} alt="" />
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
                    <h3>Actor :{serieCredit.name}</h3>
                    <h4>Personaje: {serieCredit.character}</h4>
                </span>
            </article>

        </header >
    )
}

export default CardCreditSerie