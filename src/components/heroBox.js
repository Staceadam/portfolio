import React from 'react';
import FontAwesome from 'react-fontawesome'
import Images from '../images/imagesArr'

import './heroBox.scss'

const HeroBox = () => {
  return (
    <header>
      <div className="hero-text-box">
        <img src={Images.me} alt="Stacy Adam" />
        <h1>Stacy Adam</h1>
        <h2>Front-end Web Developer</h2>
        <ul className="social-links">
          <li><a target="_blank" href="https://twitter.com/Stacyatom"><FontAwesome name='twitter' className='fa-twitter' /></a></li>
          <li><a target="_blank" href="https://github.com/Staceadam"><FontAwesome name='github' className='fa-github' /></a></li>
          <li><a target="_blank" href="http://linkedin.com/in/stacy-adam"><FontAwesome name='linkedin' className='fa-linkedin-square' /></a></li>
          <li><a target="_blank" href="https://www.facebook.com/staceadam"><FontAwesome name='facebook' className='fa-facebook' /></a></li>
        </ul>
      </div>
    </header>
  )
}

export default HeroBox;
