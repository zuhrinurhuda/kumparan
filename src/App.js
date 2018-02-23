import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import store from './redux/store'
import { Navbar, Home, Dashboard, FriendDetail } from './components'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/:username' component={FriendDetail} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    )
  }
}

export default App
