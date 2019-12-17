import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

import './about.scss';

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="row">
        <h2>About</h2>
        <p>
          Hi. I am a Front-end web developer who enjoys exploring new technologies, challenges that involve learning new skills and problem solving.
          I have experience with popular CMS’s such as Wordpress Squarespace and Shopify. I also embrace the traditional aesthetics of frontend web development,
          and am involved with new technologies such as SASS and Node.js . I’m also comfortable and familiar with frameprojects and libraries such as Bootstrap, Jquery,
          Laravel, React and Express.
        </p>
      </div>
      <div className="about-icons">
        <div><FontAwesome name='fa-coffee' className='fa-coffee' /></div>
        <div><FontAwesome name='code' className='fa-code' /></div>
        <div><FontAwesome name='fa-rocket' className='fa-rocket ' /></div>
      </div>
    </section>
  )
}

export default About;
