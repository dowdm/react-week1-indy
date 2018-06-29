import React from 'react';
import PropTypes from 'prop-types';

function Price(props){
  return (
    <div className='price'>
      <p>${props.price}</p>
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.string
};

export default Price;
