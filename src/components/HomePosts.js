import React, { Component } from 'react'
import { Segment, Item } from 'semantic-ui-react'

class HomePosts extends Component {
  render() {
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{this.props.post.title}</Item.Header>
              <Item.Description><p>{this.props.post.body}</p></Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    )
  }
}

export default HomePosts