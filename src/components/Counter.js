import React, { Component } from 'react'

class Counter extends Component {
  state = {
    counter: 0
  }

  increaseCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }
  decreaseCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }))
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h3>Counter : {counter}</h3>
        <button onClick={this.decreaseCounter}>-</button>
        <button onClick={this.increaseCounter}>+</button>
      </div>
    )
  }
}

export { Counter }
