import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators1 from "../../store/actions/counter";
import * as actionCreators2 from "../../store/actions/result";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((strResult, index) => {
            return (
              <li key={index} onClick={() => this.props.onDeleteResult(index)}>
                {strResult}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators1.increment()),
    onDecrementCounter: () => dispatch(actionCreators1.decrement()),
    onAddCounter: () => dispatch(actionCreators1.add(5)),
    onSubtractCounter: () => dispatch(actionCreators1.subtract(5)),
    onStoreResult: (result) => dispatch(actionCreators2.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators2.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
