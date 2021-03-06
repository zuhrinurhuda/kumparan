import React, { Component } from 'react'
import { Segment, Form, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'

import firebase from '../firebase'
import { add_new_post } from '../redux/actions'

const mapStateToProps = state => {
  return {
    posts: state.postReducers.posts,
    users: state.userReducers.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewPost: (newPost) => dispatch(add_new_post(newPost))
  }
}

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: firebase.auth().currentUser,
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit() {
    let currentUser = this.state.user
    let user = this.props.users.filter(user => user.name === currentUser.displayName)
    let newPost = {
      id: (this.props.posts[this.props.posts.length - 1].id + 1),
      userId: user[0].id,
      title: this.state.title,
      body: this.state.body
    }

    this.props.addNewPost(newPost)
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    let currentUser = this.state.user
    let user = this.props.users.filter(user => user.name === currentUser.displayName)
    let posts = this.props.posts.filter(post => post.userId === user[0].id)

    return (
      <Segment.Group>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid
              name='title'
              placeholder='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea
            name='body'
            placeholder='description'
            value={this.state.body}
            onChange={this.handleChange}
          />
          <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
        </Form>
        {posts.map(post => {
          return (
          <Segment key={post.id}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header as='a'>{post.title}</Item.Header>
                  <Item.Description><p>{post.body}</p></Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          )
        })}
      </Segment.Group>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)