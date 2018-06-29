import React from 'react';
import PropTypes from 'prop-types';

function RemainingPints(props){
  return (
    <div className='remaining-pints'>
      <p>{props.remaining}</p>
    </div>
  );
}

export default RemainingPints;
