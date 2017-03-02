import React, { Component, PropTypes } from 'react';

import Icon from 'parts/Icon';

import echosecLogo from 'img/Sponsors/echosec-logo.svg';
import githubLogo from 'img/Sponsors/github-logo.svg';
import launchacoLogo from 'img/Sponsors/launchaco-logo.svg';
import mlhLogo from 'img/Sponsors/mlh-logo.svg';
import sendwithusLogo from 'img/Sponsors/sendwithus-logo.svg';
import stemboltLogo from 'img/Sponsors/stembolt-logo.svg';
import uvicLogo from 'img/Sponsors/uvic-logo.svg';
import viatecLogo from 'img/Sponsors/viatec-logo.svg';

import sponsorPackage from 'docs/HackUVic2017-Sponsorship.pdf';

export default class Sponsors extends Component {
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
            title: 'Viatec',
            href: 'http://www.viatec.ca/',
            image: viatecLogo,
          },
        ],
      },
      {
        title: 'Gold Sponsors',
        orgs: [
          {
            title: 'SendWithUs',
            href: 'https://www.sendwithus.com/',
            image: sendwithusLogo,
          },
          {
            title: 'GitHub',
            href: 'https://www.github.com/',
            image: githubLogo,
          },
          {
            title: 'Echosec',
            href: 'https://www.echosec.net/',
            image: echosecLogo,
          },
        ],
      },
      {
        title: 'Silver Sponsors',
        orgs: [
          {
            title: 'Launchaco',
            href: 'http://launchaco.com/',
            image: launchacoLogo,
          },
          {
            title: 'Stembolt',
            href: 'https://stembolt.com/',
            image: stemboltLogo,
          },
        ],
      },
      {
        title: 'Partners',
        orgs: [
          {
            title: 'University of Victoria',
            href: 'https://www.uvic.ca/',
            image: uvicLogo,
          },
          {
            title: 'Major League Hacking',
            href: 'https://mlh.io/',
            image: mlhLogo,
          },
        ],
      },
    ];
    return (
      <section id="sponsors">
        <div className="container">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Sponsors</h2>
            </div>
            { sponsors.map((section) =>
              <div key={section.title} className="column col-12">
                <h3 className="text-center">{section.title}</h3>
                <div className="columns col-center flex-align-center">
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
