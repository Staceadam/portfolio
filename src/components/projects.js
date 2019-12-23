import React, { useState } from 'react';
import { Dialog } from '@blueprintjs/core';

import './projects.scss';

const projectData = [
	{
		name: 'Farm & Fleet',
		platform: '.net Application',
		className: 'fandf',
		features: [
			'Increased site speed by 40% upgrading to webpack and implementing code splitting.',
			'New Store/Automotive Section.',
			'Implemented new sign-in flow and Account Summary pages.',
			`Released Blain's rewards program and Blain's Credit Card.`
		],
		link: 'https://www.farmandfleet.com'
	},
	{
		name: 'Farm & Fleet Mobile',
		platform: 'React Native Application',
		className: 'fandfapp'
	},
	{
		name: 'Small Shops United',
		platform: 'React Native Application',
		className: 'small-shops'
	},
	{
		name: 'Antonio Fred Hair',
		platform: 'SquareSpace Website',
		className: 'antonio'
	},
	{
		name: 'Bobs Coins & Hobbies',
		platform: 'Shopify Website',
		className: 'bch'
	},
	{
		name: 'Milwaukee Turnes',
		platform: 'SquareSpace Website',
		className: 'turners'
	},
	{
		name: 'Movies App Server',
		platform: 'GraphQL Server',
		className: 'movie-server'
	},
	{
		name: 'Movies App Client',
		platform: 'GraphQL Client',
		className: 'movie-client'
	},
	{
		name: 'Game Server',
		platform: 'Express REST API',
		className: 'game-server'
	}
];

const Projects = () => {
	const [activeModal, setActiveModal] = useState(null);

	const findAndSetModal = i => {
		setActiveModal(projectData[i]);
	};

	const Project = ({ name, platform, className, index }) => {
		return (
			<a className={`projects-item ${className}`} onClick={() => findAndSetModal(index)}>
				<p className="header">{name}</p>
				<p className="content">{platform}</p>
				<p className="link">More Info</p>
			</a>
		);
	};

	return (
		<section className="section-projects" id="projects">
			<h2>Projects</h2>

			<div className="projects-list row">
				{projectData.map((project, i) => {
					return <Project key={project.className} index={i} {...project} />;
				})}
			</div>
			{activeModal && (
				<Dialog isOpen={activeModal} onClose={() => setActiveModal(null)} title={activeModal.name}>
					<div className="modal-wrapper">
						<p className="modal-header">Features</p>
						<ul>
							{activeModal.features.map(feature => (
								<li>{feature}</li>
							))}
						</ul>
						<p className="modal-header">Link</p>
					</div>
				</Dialog>
			)}
		</section>
	);
};

export default Projects;
