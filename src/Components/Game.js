import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './Game.css'
import AnimalCard from './AnimalCard'
import { animals } from '../Constants'

export default () => {

    const [selectedAnimal, setSelectedAnimal] = useState(null)

    console.log(selectedAnimal)

    return (
        <>
            <Navbar />
            <div className='heading-game'><h1>What noise does the animal make?</h1></div>
            <div className="about-container">

                {animals.map(animal => (
                    <AnimalCard setAnimal={setSelectedAnimal} selectedAnimal={selectedAnimal} animal={animal} />
                ))}

            </div>
        </>


    )
}