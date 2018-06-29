import React from 'react';
import PropTypes from 'prop-types';

function RemainingPints(props){
  return (
    <div className='remaining-pints'>
      <p>{props.remaining} Pints Remaining</p>
    </div>
  );
}

RemainingPints.propTypes = {
  remaining: PropTypes.string
};

export default RemainingPints;
