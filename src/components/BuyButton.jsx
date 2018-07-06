import React from 'react';
import PropTypes from 'prop-types';

function BuyButton(props) {

  function handleButtonClick() {
    props.onBuyButtonClick(props.selectedKeg);
  }

  return(
    <div onClick={() => {props.onKegSelection(props.kegId);}}>
      <button onClick={handleButtonClick}>Buy A Pint</button>
    </div>
  );
}
BuyButton.propTypes = {
  onBuyButtonClick: PropTypes.func,
  selectedKegId: PropTypes.string
};
export default BuyButton;
