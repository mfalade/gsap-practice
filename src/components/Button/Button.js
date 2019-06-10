import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonOuterContainer, ButtonInnerContainer } from './styles';

const ButtonContainer = ({ children, onClick }) => {
  return (
    <Button>
      <ButtonOuterContainer className="button-wrapper">
        <ButtonInnerContainer>{children}</ButtonInnerContainer>
      </ButtonOuterContainer>
    </Button>
  );
};

ButtonContainer.propTypes = {
  onClick: PropTypes.func
};

ButtonContainer.defaultProps = {
  onClick: () => {}
};

export default ButtonContainer;
