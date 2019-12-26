import React from 'react';
import './contact.scss';

const Contact = () => {
	return (
		<section className="section-contact" id="contact">
			<div className="row">
				<h2>Contact</h2>
			</div>
			<div className="row">
				<form method="POST" action="https://formspree.io/Staceadam@gmail.com" className="contact-form">
					<label className="formHeader">Name</label>
					<input type="text" name="name" id="name" required />
					<label className="formHeader">Email</label>
					<input type="email" name="_replyto" id="email" required />
					<label className="formHeader">Question</label>
					<textarea className="message" name="message"></textarea>
					<div className="submitContainer">
						<input className="contact-button" type="submit" value="Send" />
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
