import React, { Component } from 'react'
import logo from './logo.svg'
import '../styles/style.css'

const Header = () => (
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h1 className='App-title'>Welcome to React</h1>
  </header>
)

class App extends Component {
  render () {
    return (
      <Header />
      <div className='App' />
    )
  }
}

export default App
