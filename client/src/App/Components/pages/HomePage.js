import React, { Component } from "react";
import Store from '../../MyStore'
import './stylesheets/HomePage.css'
import AppHeader from '../AppHeader';
class HomePage extends Component {
  constructor(props){
    super(props);
  }


  render() {    
    let store = this.props.store
    return (
<AppHeader  updateUser={this.props.updateUser}/>
      );
  }
}
export default Store.withStore(HomePage)
