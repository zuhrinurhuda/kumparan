import React, { Component } from 'react'
import { Grid, Card, Image, Header, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link} from "react-router-dom"

import firebase from '../firebase'

const mapStateToProps = (state) => {
  return {
    users: state.userReducers.users,
    posts: state.postReducers.posts
  }
}

class ProfileSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: firebase.auth().currentUser
    }
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Image floated='left' size='mini' src={this.state.user.photoURL} />
          <Card.Header>{this.state.user.displayName}</Card.Header>
          <Card.Meta>{this.state.user.email}</Card.Meta>
          <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
          <Divider />
          <Card.Description>
            <Grid centered columns={3}>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Link to='/dashboard'>
                    <Header as='h4'>0
                      <Header.Subheader>Posts</Header.Subheader>
                    </Header>
                  </Link>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Link to='/dashboard/albums'>
                    <Header as='h4'>0
                      <Header.Subheader>Albums</Header.Subheader>
                    </Header>
                  </Link>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Link to='/dashboard/friends'>
                    <Header as='h4'>{this.props.users.length}
                      <Header.Subheader>Friends</Header.Subheader>
                    </Header>
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default connect(mapStateToProps)(ProfileSidebar)
