import React from 'react';
import PropTypes from 'prop-types';
import './price.css';

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
