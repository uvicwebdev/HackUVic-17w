import React, { Component, PropTypes } from 'react';

export default class About extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="columns cols-md col-center">
            <div className="column col-12">
              <h2>What is HackUVic?</h2>
            </div>
            <div className="column col-sm-12 col-6">
              <p>HackUVic is a hackathon hosted by the Uvic Web Design and Development Club at the University of Victoria. It's an event for developers and designers of all skill levels to build their own project from scratch.</p>
              <p>The event is free and food will be provided. Prizes for winners. Recommended team size is 2 - 5, we'll pair you up other students attending the event if you can't find a team.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
