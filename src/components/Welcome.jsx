import React from 'react';
import './welcome.css';


function Welcome(){
  var welcomeStyles = {
    fontFamily: 'courier new',
    fontSize: '65px',
    color: 'white',
    textAlign: 'center',
    textShadow: '2px 3px #ff8080'
  };
  return (
    <div className='welcome-wrapper' style={welcomeStyles}>
      <h1>Welcome to Matt's Faßecke</h1>
    </div>
  );
}

export default Welcome;
