import React from 'react';
import RemainingPints from './RemainingPints';
import Price from './Price';
import PropTypes from 'prop-types';
import './kegprofile.css';

function KegProfile(props){
  var profileStyles = {
    fontFamily: 'helvetica',
    fontSize: '20px',
    textAlign: 'center',
  }
  return (
    <div className='keg-profile-wrapper' >
      <div className ='keg-profile'>

        <div className='profile-name'style={profileStyles}><h1> {props.name}</h1>
        </div>
        <div className='profile-description'>
        <h3> {props.description} </h3>
        </div>
        <div className='profile-content'>
          <div className='profile-brewer'>
          <h3>Brewed by {props.brewer}</h3>
          </div>
          <div className='profile-abv'><p>ABV: {props.abv}</p>
          </div>
          <Price price={props.price}/>
          <RemainingPints remaining={props.remaining}/>
         </div>
      </div>

   </div>
  );
}

export default KegProfile;
