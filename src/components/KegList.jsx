import React from 'react';
import KegProfile from './KegProfile';
import './keglist.css';
import PropTypes from 'prop-types';

// onKegSelection={props.onKegSelection}
function KegList(props){
  return (
    <div className='keglist-wrapper'>
      {Object.keys(props.kegList).map(function(kegId){
        var keg = props.kegList[kegId];
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
          selectedKeg = {props.selectedKeg}
          kegId={kegId}/>;
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onBuyButtonClick: PropTypes.func,
  selectedKeg: PropTypes.string
};

export default KegList;
