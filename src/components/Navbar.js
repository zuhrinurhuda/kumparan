import React, { Component } from 'react'
import { Menu, Input, Dropdown, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import logo from '../assets/img/kumparan.svg'
import firebase from '../firebase'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      activeItem: 'home',
      isLogin: false
    }

    this.handleItemClick = this.handleItemClick.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleItemClick(events, name) {
    this.setState({
      activeItem: name
    })
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
    const { activeItem } = this.state
    const user = firebase.auth().currentUser
    const trigger = (
      <span>
        <Image avatar src={user && user.photoURL} /> {user && user.displayName}
      </span>
    )

    // const DashboardLink = ({ label, to, activeOnlyWhenExact }) => (
    //   <Route
    //     path={to}
    //     exact={activeOnlyWhenExact}
    //     children={({ match }) => (
    //       <div className={match ? "active" : ""}>
    //         {match ? "> " : ""}
    //         <Link to={to}>{label}</Link>
    //       </div>
    //     )}
    //   />
    // )

    return (
      <Menu>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <img src={logo} alt='Kumparan'/>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input transparent icon='search' placeholder='Search...' />
          </Menu.Item>
          {this.state.isLogin ?
            <Menu.Item>
              <Dropdown trigger={trigger} pointing='top' icon={null}>
                <Dropdown.Menu>
                  <Router>
                    <Link to="/dashboard">
                      <Dropdown.Item text='Dashboard' icon='dashboard' />
                    </Link>
                  </Router>
                  <Dropdown.Item text='Log Out' icon='log out' onClick={this.logout} />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item> :
            <Menu.Item name='Log In' active={activeItem === 'Log In'} onClick={this.login} />
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