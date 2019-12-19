import React from 'react';

import './pinball.scss';

const About = () => {
  return (
    <section className="section-pinball" id="pinball">
      <div className="row">
        <h2>Pinball</h2>      
        <p>
          There’s nothing better than the popping sound of a free game on a pinball machine. Sure, there’s the clacks and dings that anyone can manage when playing. But, there’s just something a little magical about racking up enough points for a free game. When I get into a flow where all of the shots I am trying to connect go exactly where I want them to, I am in pinball heaven. And best of all, you get to drink beer while playing.
        </p>
        <p>
          Though I am a self-proclaimed pinball wizard, here are my pinball bona fides:
        </p>
        <div className="pinball-list">
          <ul>
            <li>Placed 5th at the Midwest Gaming Classic convention.</li>
            <li>Member of the Madison Pinball League (yes, it’s a thing)</li>
            <li>Ranked 4404th out of 52,322 players in the International Flipper Pinball Association</li>
          </ul>
        </div>
      </div>      
    </section>
  )
}

export default About;
