import React, { Component, PropTypes } from 'react';

import classNames from 'classnames';
import moment from 'moment';

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
        time: '2017-03-11 09:00',
        events: [
          {
            title: 'Check in',
            location: 'Atrium',
          },
        ],
      },
      {
        time: '2017-03-11 10:00',
        events: [
          {
            title: 'Opening Ceremonies',
            location: 'ECS 125',
          },
        ],
      },
      { time: '2017-03-11 11:00', events: [] },
      {
        time: '2017-03-11 12:00',
        events: [
          {
            title: 'Lunch',
            location: 'Atrium',
          },
          {
            title: 'Hacking Starts',
          },
        ],
      },
      { time: '2017-03-11 12:00', events: [] },
      {
        time: '2017-03-11 13:00',
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
      { time: '2017-03-11 14:00', events: [] },
      {
        time: '2017-03-11 15:00',
        events: [
          {
            title: 'GitHub Pages Workshop',
            location: 'ECS 124',
          },
        ],
      },
      { time: '2017-03-11 16:00', events: [] },
      {
        time: '2017-03-11 17:00',
        events: [
          {
            title: 'Android and iOS Workshop',
            location: 'ECS 124',
          },
        ],
      },
      { time: '2017-03-11 18:00', events: [] },
      {
        time: '2017-03-11 19:00',
        events: [
          {
            title: 'Dinner',
            location: 'Atrium',
          },
        ],
      },
      { time: '2017-03-11 20:00', events: [] },
      {
        time: '2017-03-11 21:00',
        events: [
          {
            title: 'Cup Stacking',
            location: 'ECS 124',
          },
        ],
      },
      { time: '2017-03-11 22:00', events: [] },
      { time: '2017-03-11 23:00', events: [] },
      {
        time: '2017-03-12 00:00',
        events: [
          {
            title: 'Midnight Snack',
            location: 'Atrium',
          },
        ],
      },
      { time: '2017-03-12 01:00', events: [] },
      { time: '2017-03-12 02:00', events: [] },
      { time: '2017-03-12 03:00', events: [] },
      { time: '2017-03-12 04:00', events: [] },
      { time: '2017-03-12 05:00', events: [] },
      { time: '2017-03-12 06:00', events: [] },
      { time: '2017-03-12 07:00', events: [] },
      { time: '2017-03-12 08:00', events: [] },
      {
        time: '2017-03-12 09:00',
        events: [
          {
            title: 'Breakfast',
            location: 'Atrium',
          },
          {
            title: 'Hacking Ends',
          },
        ],
      },
      {
        time: '2017-03-12 10:00',
        events: [
          {
            title: 'Closing Ceremonies',
            location: 'ECS 125',
          },
        ],
      },
      { time: '2017-03-12 11:00', events: [] },
      { time: '2017-03-12 12:00', events: [] },
    ];
    return (
      <section id="schedule">
        <div className="container">
          <div className="columns cols-md col-center">
            <div className="column col-12">
              <h2>Schedule</h2>
            </div>
            <div className="schedule column col-8 col-md-12">
              { schedule.map((slot) => {
                if (slot.events.length > 0) {
                  const t = moment(slot.time);
                  return (
                    <div key={slot.time} className={classNames('slot', { active: moment().isSame(t, 'hour'), disabled: moment().isAfter(t, 'hour') })}>
                      <div className="time">{t.format('h:mm A')}</div>
                      { slot.events.map((event) =>
                        <div key={event.title} className="event">
                          <span className="title">{event.title}</span>
                          &nbsp;<br className="hide-sm" />
                          { event.location ? <span className="location">({event.location})</span> : null }
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
