import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import Team from './Components/Team/Team'
import Contact from './Components/Contact/Contact'
import Logo from './Components/Logos/Logo'
import {HashLink as Link} from 'react-router-hash-link';


class App extends Component {
  constructor(){
    super()

    this.state = {
      slide: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      slide: !this.state.slide
    })
  }
  render() {
    return (
      <div className='body'>
      <div className="header">
        <div className="navbar">
          <div className="titlebox">
            <Link to='/' className='homeLink' >
            <h3 className="title">Jake Leonard</h3>
            </Link>
          </div>

          <div className="linksContainer">

            <Link to='/#services'>
            <div className="linkBox">Services</div>
            </Link>

            <Link to='/#portfolio'>
            <div className="linkBox">Portfolio</div>
            </Link>

            <Link to="/#about">
            <div className="linkBox">About</div>
            </Link>

            <Link to='/#team'>
            <div className="linkBox">Tech</div>
            </Link>

            <Link to='/#contact'>
            <div className="linkBox">Contact</div>
            </Link>

          </div>

          <div className="menuContainer">
           <div onClick={this.handleClick} className="menuBox">MENU</div>
          </div>

        </div>
        
        <div className={this.state.slide ? 'top-menu top-menuOpen' : 'top-menu top-menuClosed'} >
          <Link className="dropLink" to='/#services'>
          <div onClick={()=>{this.state.slide= !this.state.slide}} className="dropLink">Services</div>
          </Link>
          <Link className="dropLink" to='/#portfolio'>
          <div onClick={()=>{this.state.slide= !this.state.slide}} className="dropLink">Portfolio</div>
          </Link>
          <Link className="dropLink" to='/#about'>
          <div onClick={()=>{this.state.slide= !this.state.slide}} className="dropLink">About</div>
          </Link>
          <Link className="dropLink" to='/#team'>
          <div onClick={()=>{this.state.slide= !this.state.slide}} className="dropLink">Tech</div>
          </Link>
          <Link className="dropLink" to='/#contact'>
          <div onClick={()=>{this.state.slide= !this.state.slide}} className="dropLink">Contact</div>
          </Link>
          </div>

        <div className='headerContentBox'>
          <div className="subtitleBox">Welcome to My Portfolio!</div>
          <div className="mainTitleBox">IT'S NICE TO MEET YOU</div>
         
          <div className="bigYellowButton"> <Link className='white' to='/#services'><p className="yellowButtonText">TELL ME MORE</p></Link></div>
          
        </div>

        </div>

        <Services />
        <Portfolio />
        <About />
        <Team />
        
        <Contact />

        <div className='footer'>
        <p>Copyright © Your Website 2017</p>
        <p>Privacy Policy  Terms of Use</p>
        </div>
        </div>
    );
  }
}

export default App;
