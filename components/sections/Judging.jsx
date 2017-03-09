import React, { Component, PropTypes } from 'react';

import Icon from 'parts/Icon';

export default class Judging extends Component {
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
      <section id="judging">
        <div className="container">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Judging</h2>
            </div>
            <div className="column col-sm-12 col-6">
              <h3 className="tight">
                <span>Technical Complexity</span>
                <small className="float-right">&nbsp;&frasl;<sub>20</sub></small>
              </h3>
              <p>
                How technically difficult was the project to build and execute? How well was it executed? Were there any obvious bugs in the demo? Judges will briefly review the source code and assign a score.
              </p>
              <p>
                This category will be weighted by the experience of the team to make the playing field even for first year students competing against 4th years or professionals.
              </p>
            </div>
            <div className="column col-sm-12 col-6">
              <h3 className="tight">
                <span>Presentation</span>
                <small className="float-right">&nbsp;&frasl;<sub>10</sub></small>
              </h3>
              <p>
                At the end of the hackathon each team will give a short presentation and demo of their project. The presentation should include:
              </p>
              <ol>
                <li>A brief description of the motivation to build the project.</li>
                <li>An overview of technologies used.</li>
                <li>A demo of how the project works, and the scenario where it would be used.</li>
                <li>An overview of what the nexts steps for the project should be. What meeds to be done for the project to be ready to be used by the people?</li>
              </ol>
            </div>
            <div className="column col-sm-12 col-6">
              <h3 className="tight">
                <span>Demonstration</span>
                <small className="float-right">&nbsp;&frasl;<sub>10</sub></small>
              </h3>
              <p>
                If the team does not have a working project no points will be given. Full points will be given for a live demo where everyone can try the team's project.
              </p>
            </div>
            <div className="column col-sm-12 col-6">
              <h3 className="tight">
                <span>Community Benefit</span>
                <small className="float-right">&nbsp;&frasl;<sub>5</sub></small>
              </h3>
              <p>
                For bonus points, the judges will assign a score based on how beneficial they think the project will be to the broader  community. 1 being the project would have a marginal impact, and 5 being the project has the potential to be used daily by many people.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
