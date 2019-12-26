import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import './heroBox.scss';

const HeroBox = () => {
	return (
		<header>
			<video
				class="header-video"
				width="100%"
				height="100%"
				type="video/mp4"
				src={require('../assets/coding.mp4')}
				autoPlay
				muted
				loop
			/>
			<div className="hero-text-box">
				<img src={require('../assets/meCropped.jpg')} alt="Stacy Adam" />
				<h1>Stacy Adam</h1>

				<h2>Full Stack Software Developer</h2>
				<ul className="social-links">
					<li>
						<a target="_blank" href="https://twitter.com/Stacyatom">
							<FontAwesomeIcon icon={faTwitter} className="fa-twitter" />
						</a>
					</li>
					<li>
						<a target="_blank" href="https://github.com/Staceadam">
							<FontAwesomeIcon icon={faGithub} className="fa-github" />
						</a>
					</li>
					<li>
						<a target="_blank" href="http://linkedin.com/in/stacy-adam">
							<FontAwesomeIcon icon={faLinkedin} className="fa-linkedin-square" />
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.facebook.com/staceadam">
							<FontAwesomeIcon icon={faFacebookSquare} className="fa-facebook" />
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default HeroBox;
