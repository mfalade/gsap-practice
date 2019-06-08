import React from 'react';
import shortid from 'shortid';

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
  'journey map'
];

const NavBarComponent = () => (
  <NavBar>
    <Logo src={LogoImg} alt="logo" />
    <nav className="nav">
      {navLinks.map(link => (
        <NavLink key={shortid()}>{link}</NavLink>
      ))}
    </nav>

    <NavLink key={shortid()}>journey map</NavLink>
  </NavBar>
);

export default NavBarComponent;
