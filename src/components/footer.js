import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

import './footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className="social-container row">

          <div>
            <ul className="social-links">
              <li><a target="_blank" href="https://twitter.com/Stacyatom"><FontAwesomeIcon icon={faTwitter}  /></a></li>
              <li><a target="_blank" href="https://github.com/Staceadam"><FontAwesomeIcon icon={faGithub} className='fa-github' /></a></li>
              <li><a target="_blank" href="http://linkedin.com/in/stacy-adam"><FontAwesomeIcon icon={faLinkedin} className='fa-linkedin-square' /></a></li>
              <li><a target="_blank" href="https://www.facebook.com/staceadam"><FontAwesomeIcon icon={faFacebook} className='fa-facebook' /></a></li>
            </ul>
          </div>

          <div>
            <p>
              Copyright &copy; 2017 by StacyAdam. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer;
