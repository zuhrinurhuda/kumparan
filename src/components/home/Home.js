import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'

import { LeftSidebar, RightSidebar, HomePosts } from '../../components'

const mapStateToProps = state => {
  return {
    posts: state.postReducers.posts,
  }
}

class Home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <LeftSidebar />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <Segment.Group>
              {this.props.posts.map(post => <HomePosts key={post.id} post={post}/> )}
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

export default connect(mapStateToProps)(Home)