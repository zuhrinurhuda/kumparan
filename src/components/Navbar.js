import React, { Component } from 'react'
import { Menu, Input, Dropdown, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../assets/img/kumparan.svg'
import firebase from '../firebase'
import { add_new_users } from '../redux/actions'

const mapStateToProps = state => {
  return {
    users: state.userReducers.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: (newUser) => dispatch(add_new_users(newUser))
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }

    this.handleItemClick = this.handleItemClick.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleItemClick() {
    // nothing
  }

  login() {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(({ user }) => {
        let newUser = {
          id: (this.props.users[this.props.users.length - 1].id + 1),
          name: user.displayName,
          username: user.displayName.split(' ')[0],
          email: user.email,
          address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
              lat: '',
              lng: ''
            }
          },
          phone: '',
          website: '',
          company: {
            name: '',
            catchPhrase: '',
            bs: '',
          }
        }
        this.props.addNewUser(newUser)

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
    // firebase.auth().currentUser untuk handle data user jika page ter-reload
    const user = firebase.auth().currentUser
    const trigger = (
      <span>
        <Image avatar src={user && user.photoURL} /> {user && user.displayName}
      </span>
    )

    // menggunakan withRouter untuk history.push karena belum ada history di props
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
            <Menu.Item name='Log in with Facebook' onClick={this.login} />
          }
        </Menu.Menu>
      </Menu>
    )
  }

  componentDidMount() {
    this.checkLoginStatus()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)