import React, { Component, PropTypes } from 'react';

import Icon from 'parts/Icon';

import echosecLogo from 'img/Sponsors/echosec-logo.svg';
import mlhLogo from 'img/Sponsors/mlh-logo.svg';

import sponsorPackage from 'docs/HackUVic2017-Sponsorship.pdf';

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
            href: 'https://mlh.io/',
            image: mlhLogo,
          },
        ],
      },
      {
        title: 'Gold Sponsors',
        orgs: [
          {
            title: 'Echosec',
            href: 'https://www.echosec.net/',
            image: echosecLogo,
          },
        ],
      },
      // {
      //   title: 'Silver Sponsors',
      //   orgs: [
      //     {
      //       title: 'Launchaco',
      //       href: 'https://www.echosec.net/',
      //       image: echosecLogo,
      //     },
      //   ],
      // },
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
                  <a className="btn btn-fat" href={sponsorPackage} target="_blank" rel="noopener noreferrer">
                    <Icon name="gift" size={1.3} /> Get the sponsorship package
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
