import React from 'react'

export default ({ setAnimal, selectedAnimal, animal }) => {
    const display = selectedAnimal === animal.name ? animal.sound : animal.name
    return (
        <div className="grid-item" onClick={() => setAnimal(animal.name)}>{display}</div >
    )

}
