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
  };

  return (

    <div className='keg-profile-wrapper' >
      <p>{props.name}</p>
      <p>jadhfkljsdhfjsdp</p>
      <div className ='keg-profile'>

        <div className='profile-name'style={profileStyles}><h1> {props.name}</h1>
        </div>
        <div className='profile-description'>
          <h3> {props.description} </h3>
        </div>
        <div className='profile-content'>
          <div className='profile-brewer'>
            <h3><em className='brew'>brewed by</em> {props.brewer}</h3>
          </div>
          <div className='profile-abv'><p><em>ABV:</em> {props.abv}</p>
          </div>
          <Price price={props.price}/>
          <RemainingPints remaining={props.remaining}/>
        </div>
      </div>
    </div>
  );
}

KegProfile.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.number
};

export default KegProfile;
