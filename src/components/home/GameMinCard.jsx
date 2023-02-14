
import React from 'react'
import '../../styles/home/GameMinCard.css'

//ICONS
import { AiFillEye, AiFillHdd } from "react-icons/ai";

export default function GameMinCard({ name, banner, author, views, downloads }) {
    return (
        <div className="MostPopularContainer">
            <img
                className='bannerMostPopular'
                src={banner}
            />

            <div className="firstInfoMostPopular">
                <p className='nameMostPopular'>{name}</p>
            </div>

            <div className="infoGameCard">
                <div className='infoItemGameCard'>
                    <AiFillEye className='iconInfoItemGameCard'/> 2k
                </div>

                <div className='infoItemGameCard'>
                    <AiFillHdd className='iconInfoItemGameCard'/> 500
                </div>
            </div>

        </div>
    )
}
