import React, { Component, PropTypes } from 'react';

import Icon from 'parts/Icon';

export default class Prizes extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const prizes = [
      {
        title: 'First Place',
        id: 'first-place',
        icon: 'first-place',
      },
      {
        title: 'Second Place',
        id: 'second-place',
        icon: 'second-place',
      },
      {
        title: 'Third Place',
        id: 'third-place',
        icon: 'third-place',
      },
      {
        title: 'Cleanest Code',
        id: 'cleanest-code',
        icon: 'code-outline',
      },
      {
        title: 'Best Design',
        id: 'design',
        icon: 'pen',
      },
      {
        title: 'Best Hardware Hack',
        id: 'presentation',
        icon: 'cog-outline',
      },
    ];
    return (
      <section id="prizes">
        <div className="container">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Prizes</h2>
            </div>
            { prizes.map((prize) =>
              <div key={prize.id} className="column col-sm-12 col-4 text-center">
                <Icon name={prize.icon} size={12} />
                <h4>{prize.title}</h4>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
