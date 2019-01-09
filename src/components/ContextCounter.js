import React, { Component } from 'react'
import { AppContext } from '../contexts/index'

class ContextCounter extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ counter, increaseCounter, decreaseCounter }) => (
          <div>
            <h2>Context Counter</h2>
            <h3>Counter : {counter}</h3>
            <button onClick={decreaseCounter}>-</button>
            <button onClick={increaseCounter}>+</button>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}

export { ContextCounter }
