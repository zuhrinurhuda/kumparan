import React, { Component } from 'react'
import { Menu, Input, Dropdown, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

import logo from '../assets/img/kumparan.svg'
import firebase from '../firebase'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }

    this.handleItemClick = this.handleItemClick.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleItemClick(events, name) {
    // nothing
  }

  login() {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(({ user }) => {
        this.setState({
          isLogin: true
        })
      })
      .catch(err => alert(err))
  }

  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          isLogin: false
        })
      })
      .catch(err => alert(err))
  }

  checkLoginStatus() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLogin: true })
      } else {
        this.setState({ isLogin: false })
      }
    })
  }

  render() {
    const user = firebase.auth().currentUser
    const trigger = (
      <span>
        <Image avatar src={user && user.photoURL} /> {user && user.displayName}
      </span>
    )

    const HomeLink = withRouter(({ history }) => (
      <Menu.Item onClick={() => { history.push('/') }}>
        <img src={logo} alt='Kumparan' />
      </Menu.Item >
    ))

    const DashboardLink = withRouter(({ history }) => (
      <Dropdown.Item text='Dashboard' icon='dashboard' onClick={() => { history.push('/dashboard') }}/>
    ))

    return (
      <Menu>
        <HomeLink />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input transparent icon='search' placeholder='Search...' />
          </Menu.Item>
          {this.state.isLogin ?
            <Menu.Item onClick={this.handleItemClick}>
              <Dropdown trigger={trigger} pointing='top' icon={null}>
                <Dropdown.Menu>
                  <DashboardLink />
                  <Dropdown.Item text='Log Out' icon='log out' onClick={this.logout} />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item> :
            <Menu.Item onClick={this.login} />
          }
        </Menu.Menu>
      </Menu>
    )
  }

  componentDidMount() {
    this.checkLoginStatus()
  }
}

export default Navbar