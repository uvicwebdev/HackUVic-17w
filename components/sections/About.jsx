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
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>What is HackUVic?</h2>
            </div>
            <div className="column col-sm-12 col-6">
              <p>HackUVic is a hackathon hosted by the Uvic Web Design and Development Club at the University of Victoria. It&quot;s an event for developers and designers of all skill levels to build their own project from scratch.</p>
              <p>The event is free and food will be provided. Prizes for winners. Recommended team size is 2 - 5, we'll pair you up other students attending the event if you can't find a team.</p>
            </div>
            <div className="column col-sm-12 col-6">
              <h3 className="tight text-center">Rules</h3>
              <ol>
                <li>The hackathon is open to anyone, we recommend <em>teams of 2 to 5</em>.</li>
                <li>Be awesome and inclusive. We follow the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">MLH Code of Conduct</a>.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
