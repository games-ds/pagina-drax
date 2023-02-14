
import React from 'react';
import '../styles/home/home.css';

import Data from '../data.json'

//COMPONETS
import MostPopular from '../components/home/MostPopular';
import Tag from '../components/Tag';
import GameCard from '../components/home/GameCard';
import GameMinCard from '../components/home/GameMinCard';

export default function Home() {
    return (
        <div className='homeContainer'>
            <div className='HomeSubContainer'>

                <div className='sectionHome '>
                    <p className='titleSectionHome'>Juegos populares</p>
                    <div className='popularGames'>
                        {
                            Data.map((item) => {
                                return (
                                    <MostPopular
                                        autor={item.author}
                                        banner={item.banner}
                                        nombre={item.name}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                <div className='bodyHome'>
                    <div className='sectionHome GameTags'>
                        <p className='titleSectionHome'>Etiquetas</p>
                        <div>
                            <Tag tag="test" />
                            <Tag tag="tesing" />
                            <Tag tag="asdwd" />
                            <Tag tag="fqwfs" />
                            <Tag tag="gwfdxfs" />
                            <Tag tag="tasdq wdqwdw" />
                            <Tag tag="gqfwqf" />
                            <Tag tag="gwegeg" />
                            <Tag tag="thrhrf" />
                            <Tag tag="trehre" />
                            <Tag tag="tesrrert" />
                            <Tag tag="teste" />
                            <Tag tag="testet erwefd" />
                            <Tag tag="test eff" />
                            <Tag tag="test qwef" />
                            <Tag tag="testfewf" />
                            <Tag tag="testqwfw" />
                            <Tag tag="test fwef" />
                            <Tag tag="testfwef" />
                            <Tag tag="test" />
                            <Tag tag="test" />
                            <Tag tag="testqwdw" />
                            <Tag tag="testqwd" />
                            <Tag tag="testasd" />
                            <Tag tag="testa" />
                            <Tag tag="testwdqd dwqd" />
                            <Tag tag="testdqwd dw" />
                            <Tag tag="test add" />
                            <Tag tag="testasd " />
                            <Tag tag="testwdqwd" />
                        </div>
                    </div>

                    <div className='sectionHome re'>
                        <p className='titleSectionHome'>Juegos recientes</p>

                        <div className='gamesHomeContainer'>
                            {
                                Data.map((item) => {
                                    return (
                                        <GameCard
                                            name={item.name}
                                            author={item.author}
                                            banner={item.banner}
                                            id={item._id} 
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='sectionHome re'>
                    <p className='titleSectionHome'>Juegos Android</p>

                    <div className='gamesSecondContainer'>
                        {
                            Data.map((item) => {
                                return (
                                    <GameMinCard
                                        name={item.name}
                                        author={item.author}
                                        banner={item.banner}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                <div className='sectionHome re'>
                    <p className='titleSectionHome'>Juegos recientes</p>

                    <div className='gamesSecondContainer'>
                        {
                            Data.map((item) => {
                                return (
                                    <GameMinCard
                                        name={item.name}
                                        author={item.author}
                                        banner={item.banner}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}