import React from 'react';

import NavBar from 'components/NavBar';
import { Title, Text } from 'components/Typography';
import thumbNail from 'assets/images/trailer-thumb.jpg';

import {
  Home,
  Content,
  TrailerThumbnail,
  ThumbNail,
  IntroText
} from './styles';

const HomeContainer = () => (
  <Home>
    <NavBar />
    <Content>
      <TrailerThumbnail>
        <ThumbNail src={thumbNail} alt="thumnail" />
      </TrailerThumbnail>
      <IntroText>
        <Title>A NEW BEGINNING</Title>
        <Text>
          Living as a man outside the shadows of the gods, kratos must adapt to
          the unfamiliar norse lands, unexpected threats, and a second chance at
          being a father.
        </Text>
      </IntroText>
    </Content>
  </Home>
);

export default HomeContainer;
