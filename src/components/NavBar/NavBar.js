import React, { Component, createRef } from 'react';
import shortid from 'shortid';
import { TimelineLite } from 'gsap';

import LogoImg from 'assets/images/logo.png';

import { NavBar, NavLink, Logo } from './styles';

const navLinks = [
  'buy',
  'game info',
  'stories',
  'media',
  'fan art',
  'gear',
  'the lost pages'
];

class NavBarComponent extends Component {
  tween = null;
  navLinks = [];
  logo = createRef();
  journeyMap = createRef();

  componentDidMount() {
    const timeLine = new TimelineLite();

    timeLine
      .from(this.logo.current, 1, { x: -80, opacity: 0 })
      .staggerFrom(
        this.navLinks,
        0.6,
        { y: -60, opacity: 0, autoAlpha: 1 },
        0.1,
        '-=0.5'
      )
      .from(this.journeyMap.current, 0.6, { x: 80, opacity: 0 }, '-=0.5');
  }

  render() {
    return (
      <div>
        <NavBar>
          <Logo src={LogoImg} alt="logo" ref={this.logo} />
          <nav className="nav">
            {navLinks.map(link => (
              <NavLink
                key={shortid()}
                className="navLink"
                ref={el => this.navLinks.push(el)}
              >
                {link}
              </NavLink>
            ))}
          </nav>

          <NavLink key={shortid()} ref={this.journeyMap}>
            journey map
          </NavLink>
        </NavBar>
      </div>
    );
  }
}

export default NavBarComponent;
