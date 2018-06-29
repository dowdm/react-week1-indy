import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

function Header(){
  var headerStyles = {
    fontFamily: 'helvetica',
    fontSize: '60px',
    textAlign: 'center',
    textShadow: '1px 2px #ff8080',

  };
  return (
    <div className='header-wrapper' style={headerStyles} >
      <div>
        <ul className='top-bar-links' >
          <Link to='/'><li>Home</li></Link>
          <Link to='/keglist'><li>Keg List</li></Link>
          <Link to='/newkegform'><li>Admin</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
