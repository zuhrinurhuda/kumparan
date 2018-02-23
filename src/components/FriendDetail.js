import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Switch, Route } from "react-router-dom"

import {
  ProfileSidebar,
  RightSidebar,
  PostList,
  AlbumList,
  FriendList
} from '../components'
import firebase from '../firebase'

const mapStateToProps = state => {
  return {
    users: state.userReducers.users,
    posts: state.postReducers.posts,
    albums: state.photoReducers.albums
  }
}

class FriendDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: firebase.auth().currentUser
    }
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <ProfileSidebar />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <Segment.Group>
              <Switch>
                <Route exact path='/dashboard' component={PostList} />
                <Route path='/dashboard/albums' component={AlbumList} />
                <Route path='/dashboard/friends' component={FriendList} />
              </Switch>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <RightSidebar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps)(FriendDetail)
