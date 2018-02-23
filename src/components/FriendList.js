import React, { Component } from 'react'
import { Segment, Image, List } from 'semantic-ui-react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    users: state.userReducers.users
  }
}

class FriendList extends Component {
  render() {
    console.log(this.props.users)
    return (
      <Segment>
        {this.props.users.map(user => {
          return (
          <List animated selection verticalAlign='middle' key={user.id}>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/christian.jpg' />
              <List.Content>
                <List.Header>{user.name}</List.Header>
              </List.Content>
            </List.Item>
          </List>
          )
        })
        }
      </Segment>
    )
  }
}

export default connect(mapStateToProps)(FriendList)