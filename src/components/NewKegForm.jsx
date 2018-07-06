import React from 'react';
import PropTypes from 'prop-types';
import './newkegform.css'

function NewKegForm(props){
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;



  function handleAddSubmission(event) {
    event.preventDefault();
    props.onAdd({name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      price: _price.value,
      remaining: 120});
      _name.value = '';
      _brewer.value = '';
      _description.value = '';
      _abv.value = '';
      _price.value = '';
  }

  return (
    <div className='form-wrapper'>
      <form onSubmit={handleAddSubmission} className='formular'>
        <div className='formular-name'>
          <label>NAME:  </label>
          <input
            type='text'
            id='name'
            placeholder='Sumpin Easy'
            required
            ref={(input) => {_name = input;}}/>
        </div>
        <div>
          <label>BREWERY:  </label>
          <input
            type='text'
            id='brewer'
            placeholder='Lagunitas'
            required
            ref={(input) => {_brewer = input;}}/>
        </div>
        <div className='formular-description'>
          <label>BEER TYPE:  </label>
          <input
            type='text'
            id='description'
            placeholder='Ale'
            required
            ref={(input) => {_description = input;}}/>
        </div>
        <div>
          <label>ABV % :  </label>
          <input
            type='text'
            id='abv'
            placeholder='5.7'
            required
            ref={(input) => {_abv = input;}}/>
        </div>
        <div>
          <label>PRICE:  </label>
          <input
            type='number'
            id='price'
            placeholder='6'
            required
            ref={(input) => {_price = input;}}/>
        </div>
        <div>
          <button  className='add' type='submit'>Add Keg to Menu</button>
        </div>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onAdd: PropTypes.func
};

export default NewKegForm;
