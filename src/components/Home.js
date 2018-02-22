import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'

import { fetch_users_from_api } from '../redux/actions/userActions'
import { LeftSidebar, RightSidebar, HomePost } from '../components'

const mapStateToProps = (state) => {
  console.log('---> 1')
  return {
    users: state.userReducers.users
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('---> 2')
  return {
    fetchUsers: () => dispatch(fetch_users_from_api())
  }
}

class Home extends Component {
  constructor(props) {
    console.log('---> 3')
    super(props)
    this.state = {
      users: this.props.users
    }
  }

  render() {
    console.log('---> 4', this.props.users)
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <LeftSidebar />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <Segment.Group>
              
              <HomePost />
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
    console.log('---> 5')
    this.props.fetchUsers()
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)