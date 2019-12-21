import React, { useState } from 'react';
import { Overlay } from '@blueprintjs/core'

import './projects.scss'

const projectData = [
	{		
		name: 'Farm & Fleet',
		platform: '.net Application',
		className: 'fandf',
		features: [
			"this is a great app. wow"
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
		setActiveModal(projectData[i])
	}

	const Project = ({ name, platform, className, index }) => {		
		return (
			<a className={`projects-item ${className}`} onClick={() => findAndSetModal(index)}>
				<p className="header">{name}</p>
				<p className="content">{platform}</p>
				<p className="link">More Info</p>
			</a>
		);
	}

  return (
    <section className="section-projects" id="projects">        
          <h2>Projects</h2>        
        
		<div className="projects-list row">
			{projectData.map((project, i) => {
				return <Project key={project.className} index={i} {...project} />;
			})}				  
		</div>
		<Overlay isOpen={activeModal !== null} onClose={() => setActiveModal(null)}>
			<p>{activeModal && activeModal.name}</p>
		</Overlay>
    </section>

  )
}

export default Projects;