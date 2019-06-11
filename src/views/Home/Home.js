import React, { createRef, useEffect } from 'react';
import { TimelineLite, Back, Power1 } from 'gsap';

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
  const introTextRef = createRef();
  const thumbnailRef = createRef();
  const playArrowRef = createRef();
  const timeLine = new TimelineLite();

  useEffect(() => {
    timeLine.to(thumbnailRef.current, 0.8, {
      scale: 1,
      opacity: 1,
      delay: 1
    });

    timeLine
      .from(introTextRef.current, 1, {
        scaleY: 0,
        opacity: 0,
        ease: Back.easeOut,
        autoAlpha: 0,
        delay: 0.4
      })

      .to(playArrowRef.current, 1.2, { x: -10, ease: Power1.easeOut });
  });

  return (
    <Home>
      <NavBar />
      <Content>
        <TrailerThumbnail ref={thumbnailRef}>
          <div>
            <CenteredDiv>
              <Circle>
                <PlayArrow
                  src={PlayArrowImage}
                  ref={playArrowRef}
                  alt="play-arrow"
                />
              </Circle>
            </CenteredDiv>
            <p>Watch rising kratos</p>
          </div>
        </TrailerThumbnail>
        <IntroText ref={introTextRef}>
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
