import React from 'react';
import PropTypes from 'prop-types';
import './remainingpints.css';

function RemainingPints(props){
  return (
    <div className='remaining-pints'>
      <p>{props.remaining} Pints Remaining</p>
    </div>
  );
}

RemainingPints.propTypes = {
  remaining: PropTypes.number
};

export default RemainingPints;
