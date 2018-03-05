import React, { Component } from 'react'
import { Grid, Card, Image, Header, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

const mapStateToProps = state => {
  return {
    users: state.userReducers.users,
    posts: state.postReducers.posts,
    userProfile: state.userReducers.userProfile
  }
}

class ProfileSidebar extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Image floated='left' size='mini' src={this.props.userProfile.photoURL} />
          <Card.Header>{this.props.userProfile.name}</Card.Header>
          <Card.Meta>{this.props.userProfile.email}</Card.Meta>
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
