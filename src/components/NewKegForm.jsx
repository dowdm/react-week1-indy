import React from 'react';
import PropTypes from 'prop-types';

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
      _name.value = ''
      _name = null;
      _brewer = null;
      _description = null;
      _abv = null;
      _price = null;
  }

  return (
    <div>
      <form onSubmit={handleAddSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewery Name'
          ref={(input) => {_brewer = input;}}/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='ABV %'
          ref={(input) => {_abv = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <button type='submit'>Add Keg to Menu</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onAdd: PropTypes.func
};

export default NewKegForm;
