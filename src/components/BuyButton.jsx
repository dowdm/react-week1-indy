import React from 'react';
import PropTypes from 'prop-types';
import './buybutton.css';

function BuyButton(props) {

  function handleButtonClick() {
    props.onBuyButtonClick(props.selectedKeg);
  }

  return(
    <div className='buy-wrapper' onClick={() => {props.onKegSelection(props.kegId);}}>
      <button className='buy' onClick={handleButtonClick}>Buy A Pint</button>
    </div>
  );
}
BuyButton.propTypes = {
  onBuyButtonClick: PropTypes.func,
  selectedKeg: PropTypes.string,
  kegId: PropTypes.string,
  onKegSelection: PropTypes.func
};
export default BuyButton;
