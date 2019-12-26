import React, { useState } from 'react';
import { Dialog, Button } from '@blueprintjs/core';

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
		link: {
			title: 'farmandfleet.com',
			href: 'https://www.farmandfleet.com'
		}
	},
	{
		name: 'Farm & Fleet Mobile',
		platform: 'React Native Application',
		className: 'fandfapp',
		features: [
			'Part of the initial release team.',
			'Created a custom Navigation solution after upgrading to latest navigation package.',
			'Implemented a unique multiple Registration feature.',
			'Responsible for maintenance and upkeep.'
		],
		link: {
			title: 'iOS App Store',
			href: 'https://apps.apple.com/us/app/blains-farm-fleet/id1293793816'
		}
	},

	{
		name: 'Small Shops United',
		platform: 'React Native Application',
		className: 'small-shops',
		features: [
			'Responsible for entire development process, start to app release.',
			'Created all UI Components.',
			'Implemented a custom location solution for individual merchants.',
			'Created a data management solution from a legacy API using Redux/Redux-Thunk.',
			'Created a custom Video Player for local content.'
		],
		link: {
			title: 'iOS App Store',
			href: 'https://apps.apple.com/us/app/ssu/id521587305?app=itunes&ign-mpt=uo%3D4'
		}
	},
	{
		name: 'Antonio Fred Hair',
		platform: 'SquareSpace Website',
		className: 'antonio',
		features: [
			'Responsible for client communication, design and development.',
			'Manually added site content including high res images.'
		],
		link: {
			title: 'antoniofredhair.com',
			href: 'http://www.antoniofredhair.com/'
		}
	},
	{
		name: 'Bobs Coins & Hobbies',
		platform: 'Shopify Website',
		className: 'bch',
		features: [
			'Responsible for client communication, design and development.',
			'Manually added site content including high res images.',
			'Trained Owners how to add products to site.'
		],
		link: {
			title: 'bobsconsandhobbies.com',
			href: 'https://bobscoinsandhobbies.com/'
		}
	},
	{
		name: 'Milwaukee Turnes',
		platform: 'SquareSpace Website',
		className: 'turners',
		features: ['Added site content.', 'Created custom js solutions.'],
		link: {
			title: 'milwaukeeturners.org/',
			href: 'http://www.milwaukeeturners.org/'
		}
	},
	{
		name: 'Movies App Server',
		platform: 'GraphQL Server',
		className: 'movie-server',
		features: [
			'Responsible for server and database architecture.',
			'Created Postgres DB instance.',
			'Uses Apollo Server.'
		],
		link: {
			title: 'movies-app.herokuapp.com/graphql',
			href: 'https://movies-app666.herokuapp.com/graphql'
		}
	},
	{
		name: 'Movies App Client',
		platform: 'GraphQL Client',
		className: 'movie-client',
		features: [
			'Uses Apollo Client for data fetching and state management.',
			'Responsible for UI desgin and development.'
		],
		link: {
			title: 'movies-appclient.herokuapp.com/',
			href: 'https://movies-appclient666.herokuapp.com/'
		}
	},
	{
		name: 'Game Server',
		platform: 'Express REST API',
		className: 'game-server',
		features: ['Used best practices for node architecture.', 'Created Postgres DB instance.'],
		link: {
			title: 'game-server-cyw.herokuapp.com/api/v1/status',
			href: 'https://game-server-cyw.herokuapp.com/api/v1/status'
		}
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
						<a target="_blank" href={activeModal.link.href}>
							{activeModal.link.title}
						</a>
						<div class="button-wrapper">
							<Button text="Okay." intent="primary" onClick={() => setActiveModal(null)} />
						</div>
					</div>
				</Dialog>
			)}
		</section>
	);
};

export default Projects;
