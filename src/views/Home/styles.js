import styled from 'styled-components';

import thumbNail from 'assets/images/trailer-thumb.jpg';

export const Home = styled.div`
  height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  padding-top: 3%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroText = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  transform: translateY(25%);
  visibility: hidden;
`;

export const PlayArrow = styled.img`
  height: 34px;
  transform: translateX(0);
`;

export const Circle = styled(CenteredDiv)`
  border: 2px solid ${props => props.theme.color.white};
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin-bottom: 16px;
`;

export const TrailerThumbnail = styled.div`
  margin-left: 8%;
  width: 300px;
  height: 170px;
  background: linear-gradient(rgba(44, 44, 44, 0.6), rgba(44, 44, 44, 0.6)),
    url(${thumbNail});
  background-repeat: no-repeat;
  background-size: cover;
  letter-spacing: 0.16em;
  font-size: 0.825em;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0);

  &:hover {
    ${PlayArrow} {
      transform: translateX(10px);
      transition: all ${props => props.theme.transition.medium};
    }
  }
`;

export const CharactersContainer = styled.section`
  position: relative;
  z-index: -1;

  img {
    position: absolute;
  }

  #kratos {
    height: 1600px;
    left: 3%;
    top: -480px;
  }

  #loki {
    height: 700px;
    left: 58%;
    top: -250px;
    z-index: -1;
  }
`;
