import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navbar, Home } from './components'

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </Container>
    )
  }
}

export default App
