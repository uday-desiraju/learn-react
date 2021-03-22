import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LifecycleA from './1_lifecycle/LifecycleA';
import Fragments from './2_fragments/Fragments';
import PureComp from './3_class_types/PureComp';

class App extends Component {


  render() {
    return (
      <div className="App">
        {/* <LifecycleA /> */}
        {/* <Fragments /> */}
        <PureComp />
      </div>
    );
  }

}
export default App;
