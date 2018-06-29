import React from 'react';
import RemainingPints from './RemainingPints';
import PropTypes from 'prop-types';

function KegProfile(props){
  return (
    <div className='keg-profile-wrapper'>
    <div className='profile-name'><h1>{props.name}</h1>
    </div>
    <div className='profile-content'>
      <div className='profile-brewer'>
      <h3>{props.brewer}</h3>
        <div className='profile-description'>
        <p>{props.description} </p>
        </div>
      </div>
      <div className='profile-price'><p>{props.price}</p>
      </div>
      <div className='profile-abv'><p>{props.abv}</p>
      </div>
      <RemainingPints remaining={props.remaining}/> 
     </div>
   </div>
  );
}

export default KegProfile;
