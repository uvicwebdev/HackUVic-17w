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
        question: 'Can I get travel reimbursement?',
        answer: 'Unfortunately, this year we are unable to provide travel reimbursement.',
      },
      {
        question: 'Is it okay if I arrive late?',
        answer: 'Yep! If you\'re going to arrive after 10:00 AM on Saturday just give us a heads up.',
      },
      {
        question: 'Can I start working on my project before the hackathon?',
        answer: 'You can begin planning your project but we ask that all the implementation is done during the hackathon.',
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
