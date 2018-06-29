import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

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
      <ul className='top-bar-links'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/keglist'><li>Keg List</li></Link>
          <Link to='/newkegform'><li>Admin</li></Link>
        </ul>
    </div>
  );
}

export default Header;
