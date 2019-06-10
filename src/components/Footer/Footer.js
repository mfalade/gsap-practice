import React from 'react';

import FaceBookIcon from 'assets/images/icon-facebook.png';
import TwitterIcon from 'assets/images/icon-twitter.png';
import YoutubeIcon from 'assets/images/icon-youtube.png';
import InstagramIcon from 'assets/images/icon-instagram.png';
import LogoRating from 'assets/images/logo-rating.jpg';

import { Footer } from './styles';

const FooterContainer = () => {
  return (
    <Footer>
      <ul>
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
      <img src={LogoRating} alt="logo rating" />
    </Footer>
  );
};

export default FooterContainer;
