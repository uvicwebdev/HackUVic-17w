import React, { Component, PropTypes } from 'react';

import Icon from 'parts/Icon';

import mlhLogo from 'img/Sponsors/mlh-logo.svg';

export default class Resources extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const sponsors = [
      {
        title: 'Powered by',
        orgs: [
          {
            title: 'Major League Hacking',
            href: '#',
            image: mlhLogo,
          },
        ],
      },
    ];
    return (
      <section id="resources">
        <div className="container">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Sponsors</h2>
            </div>
            { sponsors.map((section) =>
              <div key={section.title} className="column col-12">
                <h3 className="text-center">{section.title}</h3>
                <div className="columns col-center">
                  { section.orgs.map((org) =>
                    <div key={org.title} className="column col-sm-12 col-4">
                      <a href={org.href} target="_blank" rel="noopener noreferrer">
                        <img src={org.image} alt={org.title} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="column col-12">
              <div className="flex flex-center">
                <div className="text-center">
                  <h4>Want your logo up here?</h4>
                  <br />
                  <a className="btn btn-fat">
                    <Icon name="download" size={1.3} /> Download the sponsorship package
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
