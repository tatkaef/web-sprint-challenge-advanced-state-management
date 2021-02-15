import React, { Component } from "react";
import { connect } from "react-redux";
import { reachSmurfs } from "../actions/smurfsActions";
import SmurfContainer from "./SmurfContainer";
import AddNewSmurf from "./AddNewSmurf";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.reachSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfContainer />
        <AddNewSmurf />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};
export default connect(mapStateToProps, { reachSmurfs })(App);
