import React, { Component } from 'react';

import Config from 'Config';

import Icon from 'parts/Icon';

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
        <main className="hero">
          <div>
            <h1>
              HackUVic
              <br />
              <small>
                March 14th and 15th at the University of Victoria
              </small>
            </h1>
            <br />
            <button className="btn btn-default btn-fat" onClick={this.openChat}>
              <Icon name="social-facebook-messenger-bubble" size={1.3} /> Talk to us right meow
            </button>
          </div>
        </main>
      </div>
    );
  }
}
