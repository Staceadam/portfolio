import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCode, faRocket } from "@fortawesome/free-solid-svg-icons";

import "./about.scss";

const About = () => {
    return (
        <section className="section-about" id="about">
            <div className="row">
                <h2>About</h2>
                <p>
                    I’m Stacy Adam, a full stack software developer based in
                    Madison. I specialize in React/React Native and have strong
                    background with implementing REST APIs within .net and node.
                    I am also experienced with GraphQL server/client side, and
                    testing through Jest.
                </p>
                <p>
                    Technology and computers have been in my life since I was a
                    kid and I have always loved anything that had pixels. My
                    interest in coding started at a young age while configuring
                    bots in Diablo 2. After realizing the there wasn't a strong
                    job market for D2 bot runners, I completed a degree in Web
                    Design at WCTC. Most of my relevant skills and knowledge
                    have been self taught.
                </p>
                <p>
                    When I’m not slinging divs, you can catch me playing pinball
                    competitively and enjoying the sights and sounds that
                    Madison has to offer.
                </p>
            </div>
            <div className="about-icons row">
                <div>
                    <FontAwesomeIcon icon={faCoffee} className="fa-coffee" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faCode} className="fa-code" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faRocket} className="fa-rocket" />
                </div>
            </div>
        </section>
    );
};

export default About;
