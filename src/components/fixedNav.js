import React, { Component }  from 'react'
import jump from 'jump.js'

import './fixedNav.scss';

class FixedNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixed: 'mobile-nav-icon',
      open: 'main-nav'
    };

    this.onHamClick = this.onHamClick.bind(this);
  }

  onHamClick(event) {

    if (this.state.fixed === 'mobile-nav-icon') {
      this.setState({ fixed: 'mobile-nav-icon is-active', open: 'main-nav is-active' });
    } else {
      this.setState({ fixed: 'mobile-nav-icon', open: 'main-nav'})
    }
  }

  onNavClick(event) {

    function links(value, key) {

      if (`${key}` === event.target.className) {
        jump(`${value}`, {
            duration: 1000,
            offset: -40,
            callback: undefined,
            a11y: false
          })
      } 
    }
      new Map([['about-link', '.section-about'], ['projects-link', '.section-projects'], ['contact-link', '.section-contact']]).forEach(links);
    }


  render() {
    return (
        <div className="fixedNav">
          <div className="row">
            <div className="name">
                <a target="_blank" href="http://www.github.com/Staceadam">Stacy Adam</a>
            </div>
              <ul className={this.state.open}>
                    <li><a className="about-link" onClick={this.onNavClick} href="#about">About</a></li>
                    <li><a className="projects-link" onClick={this.onNavClick} href="#projects">Projects</a></li>
                    <li><a className="contact-link" onClick={this.onNavClick} href="#contact">Contact</a></li>
                    <li><a target="_blank" href="https://github.com/Staceadam/">GitHub</a></li>
              </ul>
            <div
              className={this.state.fixed}
              onClick={this.onHamClick}
              >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
    )
  }
}

export default FixedNav;
