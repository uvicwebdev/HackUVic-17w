import React, { Component } from 'react';

import Icon from 'parts/Icon';

import Logo from 'img/Logos/Logo_Type_Light.svg';
import Stars from 'img/stars.svg';
import MLHBadge from 'img/mlh-badge.svg';

import About from 'sections/About';
import Resources from 'sections/Resources';
import Judging from 'sections/Judging';
import Prizes from 'sections/Prizes';
import FAQ from 'sections/FAQ';
import Sponsors from 'sections/Sponsors';
import Contact from 'sections/Contact';

export default class Home extends Component {
  // static propTypes = {
  // }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    return (
      <div className="home">
        <main className="content" style={{ backgroundImage: `url(${Stars})` }}>
          <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2017/events?utm_source=na-2017&utm_medium=TrustBadge&utm_campaign=na-2017&utm_content=white" target="_blank" rel="noopener noreferrer">
            <img src={MLHBadge} alt="Major League Hacking 2017 Hackathon Season" />
          </a>
          <div className="hero">
            <div>
              <h1>
                <img src={Logo} alt="HackUVic Logo" />
                <br /><br />
                <small>
                  March 11th and 12th at the University of Victoria
                </small>
              </h1>
              <br />
              <a className="btn btn-hero btn-fat typeform-share" href="https://hackuvic.typeform.com/to/XCRqga" data-mode="1" target="_blank" rel="noopener noreferrer">
                <Icon name="ticket" size={1.3} /> Register in 30 seconds
              </a>
            </div>
          </div>
          {/* Sections */}
          <About />
          <Resources />
          <Judging />
          <Prizes />
          <FAQ />
          <Sponsors />
          <Contact />
        </main>
      </div>
    );
  }
}
