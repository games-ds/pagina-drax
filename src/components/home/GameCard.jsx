import React from 'react'
import '../../styles/home/GameCard.css'
import { useNavigate } from 'react-router-dom';

export default function GameCard({ name, author, banner, id }) {

    const navigate = useNavigate();

  return (
    <div className="gameCardContainer" onClick={() => navigate(`/game/${id}`)}>
            <div className="gameCardSubContainer">
                <div className="gameCardInfo">
                    <p className="nameGameCard">{name}</p>
                    <p className="authorGameCard">{author}</p>
                </div>

        
                    <img
                        className="imgGameCard"
                        src={banner}
                    />

            </div>
        </div>
  )
}