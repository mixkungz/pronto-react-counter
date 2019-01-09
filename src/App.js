import React, { Component } from 'react'
import { Counter } from './components/Counter'
import ReduxCounter from './components/ReduxCounter'
import { ContextCounter } from './components/ContextCounter'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <Counter />
          <hr />
          <ReduxCounter />
          <hr />
          <ContextCounter />
        </section>
      </div>
    )
  }
}

export default App
