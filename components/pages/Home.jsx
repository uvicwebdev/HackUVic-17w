import React, { Component } from 'react';

import Config from 'Config';

import Icon from 'parts/Icon';

import Logo from 'img/Logos/Logo_Type_Light.svg';
import Stars from 'img/Stars.svg';

import About from 'sections/About';
import Resources from 'sections/Resources';

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

  openChat = () => {
    window.open(Config.chat_url, 'newwindow', 'width=500, height=600'); return false;
  }

  render() {
    return (
      <div className="home">
        <main className="content" style={{ backgroundImage: `url(${Stars})` }}>
          <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2017/events?utm_source=na-2017&utm_medium=TrustBadge&utm_campaign=na-2017&utm_content=white" target="_blank" rel="noopener noreferrer">
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg" alt="Major League Hacking 2017 Hackathon Season" />
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
              <button className="btn btn-hero btn-fat">
                <Icon name="ticket" size={1.3} /> Register in 30 seconds
              </button>
            </div>
          </div>
          {/* Sections */}
          <About />
          <Resources />
        </main>
      </div>
    );
  }
}
