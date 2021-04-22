import React, { useState } from 'react';
import jolteon from '../assets/jolteon.jpeg'
import leafeon from '../assets/leafeon.png'


const raceTrack = ({pokemon, percentage}) => {
  const distance = percentage/100*850
  return (
    <div className="raceTrack">
      <img className="eevee" src={pokemon} alt="eevee" style={{marginLeft:distance}}/>
      <div className="username" style={{marginLeft:distance}}>Username </div>
    </div>
    
  );
};

export default raceTrack;
