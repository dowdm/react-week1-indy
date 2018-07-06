import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import Welcome from './Welcome';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import { v4 } from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleKegSelection = this.handleKegSelection.bind(this);
    this.handleBuyButtonClick = this.handleBuyButtonClick.bind(this);
  }

  handleAddButtonClick(newKeg) {
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleKegSelection(kegId) {
    this.setState({selectedKeg: kegId});
  }

  handleBuyButtonClick(kegId) {
    console.log(kegId +'buyclick');
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    if( newMasterKegList[kegId].remaining > 0){
    newMasterKegList[kegId].remaining = this.state.masterKegList[kegId].remaining - 1;
    } else {
      newMasterKegList[kegId].remaining = 0;
    }
    this.setState(() => {newMasterKegList;});
  }


  render(){
   //  let optionalSelectedKegContent = null;
   // if (this.state.selectedKeg != null){
   //   optionalSelectedKegContent =  <KegProfile selectedKeg={this.state.masterKegList[this.state.selectedKeg]}
   //     selectedKegId={this.state.selectedKeg} onBuyButtonClick={this.handleBuyButtonClick}/>;
   // }

   // onKegSelection={this.handleKegSelection}
   // selectedKeg={this.state.selectedKeg}
    return (
      <div className='app-wrapper'>
        <Header/>
        <Switch>
          <Route exact path = '/' component={Welcome}/>
          <Route exact path = '/kegs/new'  render={()=>
            <div>
              <NewKegForm  onAdd={this.handleAddButtonClick} />
            </div>
          }/>
          <Route exact path = '/kegs'  render={()=>
            <div>
              <KegList kegList={this.state.masterKegList}
                      onKegSelection={this.handleKegSelection}
                      selectedKeg={this.state.selectedKeg}
                      onBuyButtonClick={this.handleBuyButtonClick}   />
            </div>
          }/>
          <Route component={Error404}/>
        </Switch>
      </div>

    );
  }
}

export default App;
