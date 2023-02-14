

import React from 'react'
import '../../styles/home/MostPopular.css'

export default function MostPopular({ autor, banner, nombre }) {
  return (
    <div className="MostPopularContainer">
        <img
            className='bannerMostPopular'
            src={banner}
        />

        <div className="firstInfoMostPopular">
            <p className='nameMostPopular'>{nombre}</p>
        </div>
    </div>
  )
}
