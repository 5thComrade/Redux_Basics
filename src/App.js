import React, { Component } from "react";

import Counter from "./containers/Counter/Counter";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Counter />
      </div>
    );
  }
}

export default App;
