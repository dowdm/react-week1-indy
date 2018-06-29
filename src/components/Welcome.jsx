import React from 'react';
import {Link} from 'react-router-dom';

function Welcome(){
  return (
    <div>
      <ul className='top-bar-links'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/keglist'><li>Keg List</li></Link>
          <Link to='/newkegform'><li>Admin</li></Link>
        </ul>
    </div>
  );
}

export default Welcome;
