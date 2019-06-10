import React, { createRef, useEffect } from 'react';
import { TimelineLite } from 'gsap';

import FaceBookIcon from 'assets/images/icon-facebook.png';
import TwitterIcon from 'assets/images/icon-twitter.png';
import YoutubeIcon from 'assets/images/icon-youtube.png';
import InstagramIcon from 'assets/images/icon-instagram.png';
import LogoRatingImage from 'assets/images/logo-rating.jpg';

import { Footer, ListItem, LogoRating } from './styles';

const FooterContainer = () => {
  const footerLinksRef = createRef();
  const logoRatingRef = createRef();

  useEffect(() => {
    const transitionDuration = 0.8;
    const staggerInterval = 0.075;
    const commonTransitions = { y: 80, opacity: 0, autoAlpha: 0 };
    const timeLine = new TimelineLite();
    timeLine
      .staggerFrom(
        footerLinksRef.current.children,
        transitionDuration,
        { ...commonTransitions },
        staggerInterval,
        'end'
      )
      .from(logoRatingRef.current, transitionDuration, commonTransitions, 'end')
      .delay(transitionDuration);
  });

  return (
    <Footer>
      <ul ref={footerLinksRef}>
        <ListItem>legal & privacy</ListItem>
        <ListItem>california privacy</ListItem>
        <ListItem>
          <img src={FaceBookIcon} alt="Facebook Icon" />
        </ListItem>
        <ListItem>
          <img src={TwitterIcon} alt="Twitter icon" />
        </ListItem>
        <ListItem>
          <img src={YoutubeIcon} alt="Youtube icon" />
        </ListItem>
        <ListItem>
          <img src={InstagramIcon} alt="Instagram icon" />
        </ListItem>
      </ul>
      <LogoRating src={LogoRatingImage} alt="logo rating" ref={logoRatingRef} />
    </Footer>
  );
};

export default FooterContainer;
