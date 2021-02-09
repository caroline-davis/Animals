import React from 'react';
import './Styles/Sponsor.css'

export default function Sponsor({ sponsor }) {
    return (
        <div className="sponsor-container">{sponsor.name} - {sponsor.location} </div>
    )
}