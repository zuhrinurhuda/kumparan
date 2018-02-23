import React, { Component } from 'react'
import { Segment, Comment } from 'semantic-ui-react'

class PostList extends Component {
  render() {
    return (
      <Segment>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Segment>
    )
  }
}

export default PostList