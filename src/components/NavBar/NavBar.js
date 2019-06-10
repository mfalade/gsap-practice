import React, { createRef, useEffect } from 'react';
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

const NavBarComponent = () => {
  const timeLine = new TimelineLite();
  const logoRef = createRef();
  const navLinksRef = createRef();
  const journeyMapRef = createRef();

  useEffect(() => {
    timeLine
      .from(logoRef.current, 1, { x: -80, opacity: 0 })
      .staggerFrom(
        navLinksRef.current.children,
        0.6,
        { y: -60, opacity: 0, autoAlpha: 1 },
        0.1,
        '-=0.5'
      )
      .from(journeyMapRef.current, 0.6, { x: 80, opacity: 0 });
  });

  return (
    <div>
      <NavBar>
        <Logo src={LogoImg} alt="logo" ref={logoRef} />
        <nav className="nav" ref={navLinksRef}>
          {navLinks.map(link => (
            <NavLink key={shortid()} className="navLink">
              {link}
            </NavLink>
          ))}
        </nav>

        <NavLink key={shortid()} ref={journeyMapRef}>
          journey map
        </NavLink>
      </NavBar>
    </div>
  );
};

export default NavBarComponent;
