import React, { useState } from 'react'
import Navbar from './Navbar'
import './Styles/Game.css'
import AnimalCard from './AnimalCard'
import { animals } from '../Constants'

export default function Game() {

    const [selectedAnimal, setSelectedAnimal] = useState(null)

    console.log(selectedAnimal)

    return (
        <>
            <Navbar />
            <div className='heading-game'><h1>What noise does the animal make?</h1></div>
            <div className="about-container">

                {animals.map((animal, index) => (
                    <AnimalCard key={index} setAnimal={setSelectedAnimal} selectedAnimal={selectedAnimal} animal={animal} />
                ))}

            </div>
        </>


    )
}