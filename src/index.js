import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducers } from './reducers/index'
import { AppContext } from './contexts'
import { devToolsEnhancer } from 'redux-devtools-extension'
// Redux
const store = createStore(rootReducers, { counter: 0 }, devToolsEnhancer())

class CounterApp extends Component {
  state = {
    counter: 1,
    increaseCounter: () =>
      this.setState(prevState => ({ counter: prevState.counter + 1 })),
    decreaseCounter: () =>
      this.setState(prevState => ({ counter: prevState.counter - 1 }))
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContext.Provider>
    )
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
