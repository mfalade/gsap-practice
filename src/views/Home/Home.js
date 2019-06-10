import React, { createRef, useEffect } from 'react';
import { TweenLite, Back } from 'gsap';

import NavBar from 'components/NavBar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import { Title, Text } from 'components/Typography';
import PlayArrowImage from 'assets/images/play-arrow.png';

import {
  Home,
  Content,
  TrailerThumbnail,
  Circle,
  IntroText,
  PlayArrow,
  CenteredDiv
} from './styles';

const HomeContainer = () => {
  const introText = createRef();

  useEffect(() => {
    TweenLite.from(introText.current, 1, {
      scaleY: 0,
      opacity: 0,
      ease: Back.easeOut,
      autoAlpha: 0
    }).delay(1.4);
  });

  return (
    <Home>
      <NavBar />
      <Content>
        <TrailerThumbnail>
          <div>
            <CenteredDiv>
              <Circle>
                <PlayArrow src={PlayArrowImage} alt="play-arrow" />
              </Circle>
            </CenteredDiv>
            <p>Watch rising kratos</p>
          </div>
        </TrailerThumbnail>
        <IntroText ref={introText}>
          <Title>A NEW BEGINNING</Title>
          <Text>
            Living as a man outside the shadows of the gods, kratos must adapt
            to the unfamiliar norse lands, unexpected threats, and a second
            chance at being a father.
          </Text>
          <Button>begin journey</Button>
        </IntroText>
        <Footer />
      </Content>
    </Home>
  );
};

export default HomeContainer;
