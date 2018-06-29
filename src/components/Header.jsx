import React from 'react';
import './header.css';

function Header(){
  var headerStyles = {
    fontFamily: 'courier new',
    fontSize: '60px',
    color: 'white',
    textAlign: 'center',
    textShadow: '2px 3px #ff8080'
  }
  return (
    <div className='header-wrapper' style={headerStyles}>
      <h1>Welcome to Matt's Faßecke</h1>
    </div>
  );
}

export default Header;
