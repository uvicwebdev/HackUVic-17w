import React, { Component } from 'react';

import Config from 'Config';

import Stars from 'img/Stars.svg';

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
      <main className="home" style={{ backgroundImage: `url(${Stars})` }}>
        <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2017/events?utm_source=na-2017&utm_medium=TrustBadge&utm_campaign=na-2017&utm_content=white" target="_blank" rel="noopener noreferrer">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg" alt="Major League Hacking 2017 Hackathon Season" />
        </a>
        <div className="hero">
          <div>
            <h1>
              HackUVic
              <br />
              <small>
                March 14th and 15th at the University of Victoria
              </small>
            </h1>
            <br />
            <button className="btn btn-hero btn-lg">
              Register right now
            </button>
          </div>
        </div>
        <section>
          <div className="container">
            <h2>Guidelines</h2>
          </div>
        </section>
      </main>
    );
  }
}
