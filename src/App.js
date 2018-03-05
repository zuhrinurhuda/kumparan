import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import { Navbar, Home, Dashboard, FriendDetail } from './components'
import {
  fetch_users_from_api,
  fetch_posts_from_api,
  fetch_comments_from_api,
  fetch_albums_from_api,
  fetch_photos_from_api
} from './redux/actions'

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetch_users_from_api()),
    fetchPosts: () => dispatch(fetch_posts_from_api()),
    fetchComments: () => dispatch(fetch_comments_from_api()),
    fetchAlbums: () => dispatch(fetch_albums_from_api()),
    fetchPhotos: () => dispatch(fetch_photos_from_api())
  }
}

class App extends Component {
  render() {
    return (
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
    )
  }

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchPosts()
    this.props.fetchComments()
    this.props.fetchAlbums()
    this.props.fetchPhotos()
  }
}

export default connect(null, mapDispatchToProps)(App)
