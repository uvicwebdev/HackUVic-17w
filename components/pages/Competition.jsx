
import React, { Component } from 'react';

import Navbar from 'parts/Navbar';

import Judging from 'sections/Judging';
import Prizes from 'sections/Prizes';

export default class Competition extends Component {
  // static propTypes = {
  // }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    return (
      <main className="competition">
        <div className="container">
          <Navbar />
        </div>
        {/* Sections */}
        <Judging />
        <Prizes />
      </main>
    );
  }
}
