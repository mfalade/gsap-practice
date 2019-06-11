import React, { createRef, useEffect } from 'react';
import { TweenLite, TimelineLite, Back, Power1 } from 'gsap';
import throttle from 'lodash/throttle';

import NavBar from 'components/NavBar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import { Title, Text } from 'components/Typography';

import kratos from 'assets/images/kratos.png';
import loki from 'assets/images/young-loki.png';
import PlayArrowImage from 'assets/images/play-arrow.png';

import {
  Home,
  Content,
  TrailerThumbnail,
  Circle,
  IntroText,
  PlayArrow,
  CenteredDiv,
  CharactersContainer
} from './styles';

const HomeContainer = () => {
  const introTextRef = createRef();
  const thumbnailRef = createRef();
  const playArrowRef = createRef();
  const timeLine = new TimelineLite();

  const handleMouseMove = ({ clientX, clientY }) => {
    const xOffset = (clientX / window.innerWidth) * 8;
    const yOffset = (clientY / window.innerHeight) * 12;
    TweenLite.to('#kratos', 2, {
      x: xOffset,
      y: yOffset,
      ease: Power1.easeOut
    });

    TweenLite.to('#loki', 2, {
      x: -xOffset,
      y: -yOffset,
      ease: Power1.easeOut,
      delay: 0.2
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', throttle(handleMouseMove));

    timeLine
      .to(thumbnailRef.current, 0.8, {
        scale: 1,
        opacity: 1,
        delay: 1
      })
      .from(
        introTextRef.current,
        1,
        {
          scaleY: 0,
          opacity: 0,
          ease: Back.easeOut,
          autoAlpha: 0
        },
        '+=0.4'
      )
      .to(playArrowRef.current, 1.2, { x: -10, ease: Power1.easeOut });
  });

  return (
    <Home>
      <NavBar />
      <Content>
        <div>
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
        </div>
        <IntroText ref={introTextRef}>
          <Title>A NEW BEGINNING</Title>
          <Text>
            Living as a man outside the shadows of the gods, kratos must adapt
            to the unfamiliar norse lands, unexpected threats, and a second
            chance at being a father.
          </Text>
          <Button>begin journey</Button>
        </IntroText>
        <CharactersContainer>
          <img src={kratos} alt="Kratos" id="kratos" />
          <img src={loki} alt="Loki" id="loki" />
        </CharactersContainer>
        <Footer />
      </Content>
    </Home>
  );
};

export default HomeContainer;
