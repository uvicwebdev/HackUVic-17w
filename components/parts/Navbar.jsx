import React, { Component /* , PropTypes */ } from 'react';
import { Link } from 'react-router';

import Logo from 'img/Logos/Logo_Type_Color.svg';

export default class Navbar extends Component {
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
    return (
      <header className="navbar">
        <section className="navbar-section">
          <Link to="/" className="navbar-brand brand">
            <img src={Logo} alt="HackUVic Logo" />
          </Link>
        </section>
        <section className="navbar-section">
        </section>
      </header>
    );
  }
}
