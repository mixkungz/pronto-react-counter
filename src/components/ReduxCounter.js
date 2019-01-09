import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReduxCounter extends Component {
  state = {
    counter: 0
  }

  increaseCounter = () => {
    let { counter } = this.state
    this.setState({
      counter: counter + 1
    })
  }
  decreaseCounter = () => {
    let { counter } = this.state
    this.setState({
      counter: counter - 1
    })
  }

  render() {
    console.log(this.props)
    const { counter } = this.props
    return (
      <div>
        <h2>Hi Redux!</h2>
        <h3>Counter : {counter}</h3>
        <button onClick={this.decreaseCounter}>-</button>
        <button onClick={this.increaseCounter}>+</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

export default connect(mapStateToProps)(ReduxCounter)
