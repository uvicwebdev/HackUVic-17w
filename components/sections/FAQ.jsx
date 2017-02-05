import React, { Component, PropTypes } from 'react';

export default class FAQ extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const questions = [
      {
        question: 'Can I get travel reimbursement if I\'m out of province?',
        answer: 'Sorry, but only BC residents can get travel reimbursements.',
      },
      {
        question: 'I\'ve never built a website or app before, can I still participate?',
        answer: 'Absolutely, and you should. Hackathons are one of the best ways to dive into programming and web development head-first.',
      },
    ];
    return (
      <section id="faq">
        <div className="container">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Frequently Asked Questions</h2>
              <dl className="columns tight">
                { questions.map((question, index) =>
                  <div key={index} className="column col-sm-12 col-6">
                    <dt>
                      {question.question}
                    </dt>
                    <dd>{question.answer}</dd>
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
