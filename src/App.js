import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import store from './redux/store'
import { Navbar, Home } from './components'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Navbar />
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </Container>
      </Provider>
    )
  }
}

export default App
