import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'

import logo from '../assets/img/kumparan.svg'

class Navbar extends Component {
  constructor () {
    super()
    this.state = {
      activeItem: 'home'
    }

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick (events, { name }) {
    this.setState({
      activeItem: name
    })
  }

  render () {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <img src={logo} alt='Kumparan'/>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input transparent icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar