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
    return (
      <section id="resources">
        <div className="container">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Resources</h2>
            </div>
            <div className="column col-sm-12 col-6">
              <h3 className="tight ">Tools</h3>

            </div>
            <div className="column col-sm-12 col-6">
              <h3 className="tight">Data Sets</h3>
              <dl>
                { datasets.map((dataset, index) =>
                  <div key={index}>
                    <dt>
                      {dataset.title}
                      &nbsp;
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
