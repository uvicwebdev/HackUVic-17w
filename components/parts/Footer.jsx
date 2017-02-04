import React, { Component /* , PropTypes */ } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Config from 'Config';

import Icon from 'parts/Icon';

import Logo from 'img/Logos/Logo_Mark_Color.svg';

export default class Footer extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    const linkClass = classNames([
      'btn',
      'btn-link',
      'tooltip',
    ]);
    return (
      <footer>
        <div className="brand">
          <Link to="/">
            <img src={Logo} alt="HackUVic Logo" />
          </Link>
        </div>
        <p className="made-with hide-xs">Made with <Icon name="heart" /> in Victoria, BC</p>
        <ul className="social">
          {Config.social_links.map((link, i) =>
            <li key={i}>
              <a href={link.href} className={linkClass} data-tooltip={link.tooltip} target="_blank" rel="noopener noreferrer external">
                <Icon name={link.icon} />
              </a>
            </li>
          )}
        </ul>
      </footer>
    );
  }
}
