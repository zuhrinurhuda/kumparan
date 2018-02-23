import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'

import {
  fetch_users_from_api,
  fetch_posts_from_api,
  fetch_comments_from_api,
  fetch_albums_from_api,
  fetch_photos_from_api
} from '../redux/actions'

import { LeftSidebar, RightSidebar, HomePosts } from '../components'

const mapStateToProps = state => {
  return {
    posts: state.postReducers.posts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetch_users_from_api()),
    fetchPosts: () => dispatch(fetch_posts_from_api()),
    fetchComments: () => dispatch(fetch_comments_from_api()),
    fetchAlbums: () => dispatch(fetch_albums_from_api()),
    fetchPhotos: () => dispatch(fetch_photos_from_api())
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

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchPosts()
    this.props.fetchComments()
    this.props.fetchAlbums()
    this.props.fetchPhotos()
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)