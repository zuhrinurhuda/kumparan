import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'

import { fetch_users_from_api, fetch_posts_from_api } from '../redux/actions'

import { LeftSidebar, RightSidebar, HomePosts } from '../components'

const mapStateToProps = (state) => {
  console.log('---> 1')
  return {
    users: state.userReducers.users,
    posts: state.postReducers.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('---> 2')
  return {
    fetchUsers: () => dispatch(fetch_users_from_api()),
    fetchPosts: () => dispatch(fetch_posts_from_api())
  }
}

class Home extends Component {
  constructor(props) {
    console.log('---> 3')
    super(props)
  }

  componentWillMount() {
    console.log('---> 4')
  }

  render() {
    console.log('---> 5')
    // console.log('---> 5', this.props.users)
    console.log('---> 5', this.props.posts)

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
    console.log('---> 6')
    this.props.fetchUsers()
    this.props.fetchPosts()
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)