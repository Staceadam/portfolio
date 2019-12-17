import React from 'react'
import FontAwesome from 'react-fontawesome'

import './footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className="social-container row">

          <div>
            <ul className="social-links">
              <li><a target="_blank" href="https://twitter.com/Stacyatom"><FontAwesome name='twitter' className='fa-twitter' /></a></li>
              <li><a target="_blank" href="https://github.com/Staceadam"><FontAwesome name='github' className='fa-github' /></a></li>
              <li><a target="_blank" href="http://linkedin.com/in/stacy-adam"><FontAwesome name='linkedin' className='fa-linkedin-square' /></a></li>
              <li><a target="_blank" href="https://www.facebook.com/staceadam"><FontAwesome name='facebook' className='fa-facebook' /></a></li>
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
