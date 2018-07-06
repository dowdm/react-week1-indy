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
      masterKegList:{},
      selectedKeg: null
    };
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleKegSelection = this.handleKegSelection.bind(this);
    this.handleBuyButtonClick = this.handleBuyButtonClick.bind(this);
  }

  handleAddButtonClick(newKeg) {
    let newKegId = v4();
    let newMasterTamList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleKegSelection(kegId) {
    this.setState({selectedKeg: kegId});
  }

  handleBuyButtonClick(kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    if( newMasterKegList[kegId].remaining >= 1){
    newMasterKegList[kegId].remaining = this.state.masterKegList[kegId].remaining + 30;
    } else {
      newMasterTamList[kegId].remaining = 0;
    }
    newMasterTamList[tamId].eating = true;
    this.setState(() => {newMasterKegList;});
  }


  render(){
    return (
      <div className='app-wrapper'>
        <Header/>
        <Switch>
          <Route exact path = '/' component={Welcome}/>
          <Route exact path = '/kegs/new' component={NewKegForm}/>
          <Route exact path = '/kegs'  render={()=>
            <div>
              <KegList kegList={this.state.masterKegList} onKegSelection={this.handleKegSelection} onAdd={this.handleAddButtonClick} selectedKeg={this.state.selectedKeg} />
            </div>
          }/>
          <Route component={Error404}/>
        </Switch>
      </div>

    );
  }
}

export default App;
