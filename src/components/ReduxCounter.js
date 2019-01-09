import { connect } from 'react-redux'
import React, { Component } from 'react'
import { increaseCounter, decreaseCounter } from '../actions/counter'
class ReduxCounter extends Component {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props
    return (
      <div>
        <h2>Hi Redux!</h2>
        <h3>Counter : {counter}</h3>
        <button onClick={decreaseCounter}>-</button>
        <button onClick={increaseCounter}>+</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCounter)
