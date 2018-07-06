import React from 'react';
import KegProfile from './KegProfile';
import './keglist.css';
import PropTypes from 'prop-types';

// onKegSelection={props.onKegSelection}
function KegList(props){
  return (
    <div className='keglist-wrapper'>
      <h1>Our Selection:</h1>
        {Object.keys(props.kegList).map(function(kegId){
          var keg = props.kegList[kegId];
          console.log(keg.name);
          return <KegProfile
          name={keg.name}
          brewer={keg.brewer}
          description={keg.description}
          abv={keg.abv}
          price={keg.price}
          remaining={keg.remaining}
          key={kegId}
          onBuyButtonClick = {props.onBuyButtonClick}
          onKegSelection ={props.onKegSelection}
          kegId={kegId}/>;
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onkegSelection: PropTypes.func
};

export default KegList;
