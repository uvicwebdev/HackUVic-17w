import React, { Component, PropTypes } from 'react';

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

  render() {
    const datasets = [
      {
        title: 'City of Victoria',
        href: 'http://www.victoria.ca/EN/main/online-services/open-data-catalogue.html',
        description: 'The City of Victoria provides free access to municipal financial, census and infrastructure data.',
      },
      {
        title: 'City of Saanich',
        href: 'http://www.saanich.ca/EN/main/local-government/data-catalogue-1.html',
        description: 'The City of Saanich provides free access to municipal geographic data.',
      },
      {
        title: 'British Columbia',
        href: 'https://www.opendatabc.ca/dataset',
        description: 'OpenDataBC provides the opportunity for you to get unrestricted access to bus schedules, ferry schedules, climate data, parks, crime stats, permits, licenses, and lots more.',
      },
    ];
    const tools = [
      {
        title: 'GitHub Student Pack',
        href: 'https://education.github.com/pack',
        description: 'GitHub has partnered with some of the coolest companies on the internet to give students free access to the best developer tools in one place.',
      },
      {
        title: 'Startup Stash',
        href: 'http://startupstash.com/',
        description: 'Startup Stash is a curated directory of resources & tools to help you build your startup (or hackathon project).',
      },
      {
        title: 'Auth0',
        href: 'https://auth0.com/',
        description: 'Auth0 lets you add authentication to your web and mobile apps in under 10 minutes and is free for the 7,000 active users.',
      },
    ];
    return (
      <section id="resources">
        <div className="container">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Resources</h2>
            </div>
            <div className="column col-sm-12 col-6">
              <h3 className="tight ">Tools</h3>
              <dl>
                { tools.map((tool, index) =>
                  <div key={index}>
                    <dt>
                      {tool.title}
                      &nbsp;&nbsp;
                      <a className="btn btn-sm" href={tool.href} target="_blank" rel="noopener noreferrer">
                        <Icon name="external-link" /> Open
                      </a>
                    </dt>
                    <dd>{tool.description}</dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="column col-sm-12 col-6">
              <h3 className="tight">Datasets</h3>
              <dl>
                { datasets.map((dataset, index) =>
                  <div key={index}>
                    <dt>
                      {dataset.title}
                      &nbsp;&nbsp;
                      <a className="btn btn-sm" href={dataset.href} target="_blank" rel="noopener noreferrer">
                        <Icon name="chart-pie" /> View Dataset
                      </a>
                    </dt>
                    <dd>{dataset.description}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
