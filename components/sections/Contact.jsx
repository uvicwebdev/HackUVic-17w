import React, { Component, PropTypes } from 'react';

import Config from 'Config';
import Icon from 'parts/Icon';

export default class Resources extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  openChat = () => {
    window.open(Config.contact.chat_url, 'newwindow', 'width=500, height=600'); return false;
  }

  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Contact Us</h2>
            </div>
            <div className="column col-12">
              <div className="flex flex-center fill-xs">
                <div className="text-center">
                  <p>Have a question we didn't answer? Get in touch.</p>
                  <div className="columns">
                    <div className="column col-sm-12 col-6">
                      <a className="btn btn-primary btn-block btn-fat" onClick={this.openChat}>
                        <Icon name="social-facebook-messenger-bubble" size={1.3} /> Message us
                      </a>
                    </div>
                    <div className="column col-sm-12 col-6">
                      <a className="btn btn-primary btn-block btn-fat" href={`mailto:${Config.contact.email}`} target="_blank" rel="noopener noreferrer">
                        <Icon name="mail" size={1.3} /> Send an email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
