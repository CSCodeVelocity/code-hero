import React, { useState } from 'react';
import jolteon from '../assets/jolteon.jpeg'
import leafeon from '../assets/leafeon.png'


const raceTrack = ({pokemon, percentage, username}) => {
  // percentage = 50;
  const distance = percentage/100*850
  return (
    <div className="raceTrack">
      <img className="eevee" src={pokemon} alt="eevee" style={{marginLeft:distance}}/>
      <div className="username" style={{marginLeft:distance}}>{username} </div>
    </div>
    
  );
};

export default raceTrack;
