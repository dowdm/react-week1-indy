import React from 'react';
import PropTypes from 'prop-types';
import './remainingpints.css';

function RemainingPints(props){
  if (props.remaining != 0){
    return (
      <div className='remaining-pints'>
        <p>{props.remaining} Pints Remaining</p>
      </div>
    );
  }else {
    return(
      <div className='remaining-pints'>
        <p>Ausverkauft</p>
      </div>
    );
  }
}

RemainingPints.propTypes = {
  remaining: PropTypes.number
};

export default RemainingPints;
