import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Switch, Route } from "react-router-dom"

import {
  ProfileSidebar,
  RightSidebar,
  PostList,
  AlbumList,
  FriendList
} from '../../components'

class Dashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <ProfileSidebar />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <Switch>
              <Route exact path='/dashboard' component={PostList} />
              <Route path='/dashboard/albums' component={AlbumList} />
              <Route path='/dashboard/friends' component={FriendList} />
            </Switch>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <RightSidebar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Dashboard
