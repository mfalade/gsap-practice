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
  'the lost pages',
];

const NavBarComponent = () => {
  const timeLine = new TimelineLite();
  const logoRef = createRef();
  const navLinksRef = createRef();
  const journeyMapRef = createRef();

  useEffect(() => {
    const commonTransitions = {
      opacity: 0,
      autoAlpha: 0,
    };
    const animationDuration = 0.6;

    timeLine
      .from(logoRef.current, 1, { ...commonTransitions, x: -80 }, 'end')
      .staggerFrom(
        navLinksRef.current.children,
        animationDuration,
        { ...commonTransitions, y: -60 },
        0.1,
        '-=0.5',
      )
      .from(
        journeyMapRef.current,
        animationDuration,
        {
          ...commonTransitions,
          x: 80,
        },
        'end',
      );
  });

  return (
    <>
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
    </>
  );
};

export default NavBarComponent;
