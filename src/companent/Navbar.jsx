import React from 'react'
import logo from '../assets/logo.svg'
import hero from '../assets/Group 22.png'
import Button from './Button'

const Navbar = () => {
  return (
    <header className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-overlay">
        <div className="container">
          <nav className="navbar">
            <div className="brand">
              <img src={logo} alt="CoffeeScan logo" />
            </div>
            <Button label="Launch App" />
          </nav>

          <div className="hero-content">
            <div className="hero-copy">
              <span className="hero-line" />
              <p className="subtitle">SIMPLY CLEVER</p>
              <h1 className="title">BEST COFFEE</h1>
              <p className="description">Lorem Ipsum Dolor met sit dolor</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar