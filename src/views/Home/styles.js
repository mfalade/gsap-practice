import styled from 'styled-components';

import primaryBgImage from 'assets/images/bg-home.jpg';
import kratos from 'assets/images/kratos.png';
import loki from 'assets/images/young-loki.png';

export const Home = styled.div`
  height: 100vh;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.25),
      rgba(0, 0, 0, 0.5)
    ),
    url(${primaryBgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.section`
  height: 100%;
  background-image: url(${kratos}), url(${loki});
  background-position: 10% 0, 650px 200px;
  background-repeat: no-repeat, no-repeat;
  background-size: 830px, 550px;
`;

export const TrailerThumbnail = styled.div`
  margin: 4% 8%;
  width: 300px;
  height: 170px;
`;

export const IntroText = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
`;

export const ThumbNail = styled.img`
  width: 100%;
`;
