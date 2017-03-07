import React, { Component, PropTypes } from 'react';

import Icon from 'parts/Icon';

export default class Schedule extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const schedule = [
      {
        day: 'Saturday',
        time: ' 9:00 AM',
        events: [
          {
            title: 'Check in',
            location: 'Atrium',
          },
        ],
      },
      {
        day: 'Saturday',
        time: '10:00 AM',
        events: [
          {
            title: 'Opening Ceremonies',
            location: 'ECS 125',
          },
        ],
      },
      { day: 'Saturday', time: ' 11:00 AM', events: [] },
      {
        day: 'Saturday',
        time: '12:00 PM',
        events: [
          {
            title: 'Lunch',
            location: 'Atrium',
          },
          {
            title: 'Hacking Starts',
            location: 'ECS',
          },
        ],
      },
      {
        day: 'Saturday',
        time: ' 1:00 PM',
        events: [
          {
            title: 'Hackthon 101',
            location: 'ECS 124',
          },
          {
            title: 'Team Formation',
            location: 'ECS 124',
          },
        ],
      },
      { day: 'Saturday', time: ' 2:00 PM', events: [] },
      {
        day: 'Saturday',
        time: ' 3:00 PM',
        events: [
          {
            title: 'Git Workshop',
            location: 'ECS 124',
          },
        ],
      },
      { day: 'Saturday', time: ' 4:00 PM', events: [] },
      {
        day: 'Saturday',
        time: ' 5:00 PM',
        events: [
          {
            title: 'Android and iOS Workshop',
            location: 'ECS 124',
          },
        ],
      },
      { day: 'Saturday', time: ' 6:00 PM', events: [] },
      {
        day: 'Saturday',
        time: ' 7:00 PM',
        events: [
          {
            title: 'Dinner',
            location: 'Atrium',
          },
        ],
      },
      { day: 'Saturday', time: ' 8:00 PM', events: [] },
      { day: 'Saturday', time: ' 9:00 PM', events: [] },
      { day: 'Saturday', time: '10:00 PM', events: [] },
      { day: 'Saturday', time: '11:00 PM', events: [] },
      {
        day: 'Sunday',
        time: ' 12:00 AM',
        events: [
          {
            title: 'Midnight Snack',
            location: 'Atrium',
          },
        ],
      },
      { day: 'Sunday', time: ' 1:00 AM', events: [] },
      {
        day: 'Sunday',
        time: ' 2:00 AM',
        events: [
          {
            title: 'Cup Stacking',
            location: 'ECS 124',
          },
        ],
      },
      { day: 'Sunday', time: ' 3:00 AM', events: [] },
      { day: 'Sunday', time: ' 4:00 AM', events: [] },
      { day: 'Sunday', time: ' 5:00 AM', events: [] },
      { day: 'Sunday', time: ' 6:00 AM', events: [] },
      { day: 'Sunday', time: ' 7:00 AM', events: [] },
      { day: 'Sunday', time: ' 8:00 AM', events: [] },
      {
        day: 'Sunday',
        time: ' 9:00 AM',
        events: [
          {
            title: 'Breakfast',
            location: 'Atrium',
          },
          {
            title: 'Hacking Ends',
            location: 'ECS',
          },
        ],
      },
      {
        day: 'Sunday',
        time: '10:00 AM',
        events: [
          {
            title: 'Closing Ceremonies',
            location: 'ECS 125',
          },
        ],
      },
      { day: 'Sunday', time: '11:00 AM', events: [] },
      { day: 'Sunday', time: '12:00 PM', events: [] },
    ];
    return (
      <section id="schedule">
        <div className="container">
          <div className="columns cols-md col-center">
            <div className="column col-12">
              <h2>Schedule</h2>
            </div>
            <div className="schedule column col-8 col-md-12">
              { schedule.map((slot) => (slot.events.length > 0 ?
                <div key={slot.day + slot.time} className="slot">
                  <div className="time">{slot.time}</div>
                  { slot.events.map((event) =>
                    <div key={event.title} className="event">
                      <span className="title">{event.title}</span>&nbsp;
                      <span className="location">({event.location})</span>
                    </div>
                  )}
                </div>
              : null))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
