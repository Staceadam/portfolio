import React from 'react';
import Images from '../images/imagesArr'

import './projects.scss'



const Projects = () => {
  return (
    <section className="section-projects" id="projects">
        <div className="row">
          <h2>Projects</h2>
        </div>

        <div className="wrapper">
          <div className="cols">
        			<div className="col" ontouchstart="this.classNameList.toggle('hover');">
        				<div className="container">
        					<div className="front afh">
        						<div className="inner">
        							<p>Antonio Fred Hair</p>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        						  <p>Designed and developer a portfolio site for a local hair and makeup stylist...Lots of images!</p>
                      <p className="text-1"><a target="_blank" href="http://www.antoniofredhair.com/">View</a></p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classNameList.toggle('hover');">
        				<div className="container">
        					<div className="front bch">
        						<div className="inner">
        							<p>Bobs Coins and Hobbies</p>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Shopify website for a hobby shop. Set up new POS system and trained both owners on categorizing and updating products.</p>
                      <p className="text-1"><a target="_blank" href="https://bobscoinsandhobbies.com/">View</a></p>
                    </div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classNameList.toggle('hover');">
        				<div className="container">
        					<div className="front amb">
        						<div className="inner">
        							<p>Ayla May Bead</p>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Designed and developed a website for a local Milwaukee beading artist.</p>
                      <p className="text-2"><a target="_blank" href="https://aylamaybead.com/">View</a>
                      <a target="_blank" href="https://github.com/Staceadam/AylaMayBead">GitHub</a>
                      </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classNameList.toggle('hover');">
        				<div className="container">
        					<div className="front omnifood">
        						<div className="inner">
        							<p>Omnifood</p>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Mock food order website for learning some new responsive and animations techniques.</p>
                      <p className="text-2"><a target="_blank" href="http://omnifood.stacyadam.io">View</a>
                        <a target="_blank" href="https://github.com/Staceadam/OmniFood">GitHub</a>
                      </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classNameList.toggle('hover');">
        				<div className="container">
        					<div className="front pig-game">
        						<div className="inner">
        							<p>Pig Game</p>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Messing with more modular javascript programming and DOM manipulation.</p>
                      <p className="text-2"><a target="_blank" href="http://piggame.stacyadam.io/">View</a>
                        <a target="_blank" href="https://github.com/Staceadam/Pig-Game">GitHub</a>
                      </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classNameList.toggle('hover');">
        				<div className="container">
        					<div className="front dice-roller">
        						<div className="inner">
        							<p>Dice Roller</p>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Dice Roller with javascript to learn some more functional programming.</p>
                      <p className="text-2"><a target="_blank" href="http://diceroller.stacyadam.io/">View</a>
                        <a target="_blank" href="https://github.com/Staceadam/diceRoller">GitHub</a>
                      </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col" ontouchstart="this.classNameList.toggle('hover');">
        				<div className="container">
        					<div className="front budget-calc" >
        						<div className="inner">
        							<p>Budget Calc</p>
        						</div>
        					</div>
        					<div className="back">
        						<div className="inner">
        							<p>Introduction to IFFEs and completely modular javascript structure.</p>
                      <p className="text-2"><a target="_blank" href="http://budgetcalc.stacyadam.io/">View</a>
                        <a target="_blank" href="https://github.com/Staceadam/budgetcalc">GitHub</a>
                      </p>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
          </div>

    </section>

  )
}

export default Projects;
