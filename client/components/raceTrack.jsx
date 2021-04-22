import React, { useState } from 'react';
import jolteon from '../assets/jolteon.jpeg'
import leafeon from '../assets/leafeon.png'

const raceTrack = () => {
  return (
    <div className="raceTrack">
      <img className="eevee" src={jolteon} alt="eevee" style={{marginLeft:850}}/>
      <div className="username" style={{marginLeft:850}}>Username </div>
    </div>
    
  );
};

export default raceTrack;
