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

const mapStateToProps = (state) => {
  // console.log('lifecycle test ---> 1')
  return {
    users: state.userReducers.users,
    posts: state.postReducers.posts,
    comments: state.postReducers.comments,
    albums: state.photoReducers.albums,
    photos: state.photoReducers.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log('lifecycle test ---> 2')
  return {
    fetchUsers: () => dispatch(fetch_users_from_api()),
    fetchPosts: () => dispatch(fetch_posts_from_api()),
    fetchComments: () => dispatch(fetch_comments_from_api()),
    fetchAlbums: () => dispatch(fetch_albums_from_api()),
    fetchPhotos: () => dispatch(fetch_photos_from_api())
  }
}

class Home extends Component {
  constructor(props) {
    // console.log('lifecycle test ---> 3')
    super(props)
  }

  componentWillMount() {
    // console.log('lifecycle test ---> 4')
  }

  render() {
    // console.log('lifecycle test ---> 5')
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
    // console.log('lifecycle test ---> 6')
    this.props.fetchUsers()
    this.props.fetchPosts()
    this.props.fetchComments()
    this.props.fetchAlbums()
    this.props.fetchPhotos()
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)