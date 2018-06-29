import React from 'react';
import PropTypes from 'prop-types';

function Price(props){
  return (
    <div className='price'>
      <p>${props.price}</p>
    </div>
  );
}

export default Price;
