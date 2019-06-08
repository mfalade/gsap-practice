import styled from 'styled-components';

import primaryBgImage from 'assets/images/bg-home.jpg';

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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
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
