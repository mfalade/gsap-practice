import React, { createRef, useEffect } from 'react';
import { TimelineLite } from 'gsap';

import FaceBookIcon from 'assets/images/icon-facebook.png';
import TwitterIcon from 'assets/images/icon-twitter.png';
import YoutubeIcon from 'assets/images/icon-youtube.png';
import InstagramIcon from 'assets/images/icon-instagram.png';
import LogoRating from 'assets/images/logo-rating.jpg';

import { Footer } from './styles';

const FooterContainer = () => {
  const footerLinksRef = createRef();
  const logoRatingRef = createRef();

  useEffect(() => {
    const transitionDuration = 0.8;
    const staggerInterval = 0.075;
    const transition = { y: 80, opacity: 0 };
    const timeLine = new TimelineLite();
    timeLine
      .staggerFrom(
        footerLinksRef.current.children,
        transitionDuration,
        { ...transition, autoAlpha: 1 },
        staggerInterval,
        'end'
      )
      .from(logoRatingRef.current, transitionDuration, transition, 'end')
      .delay(1);
  });

  return (
    <Footer>
      <ul ref={footerLinksRef}>
        <li>legal & privacy</li>
        <li>california privacy</li>
        <li>
          <img src={FaceBookIcon} alt="Facebook Icon" />
        </li>
        <li>
          <img src={TwitterIcon} alt="Twitter icon" />
        </li>
        <li>
          <img src={YoutubeIcon} alt="Youtube icon" />
        </li>
        <li>
          <img src={InstagramIcon} alt="Instagram icon" />
        </li>
      </ul>
      <img src={LogoRating} alt="logo rating" ref={logoRatingRef} />
    </Footer>
  );
};

export default FooterContainer;
