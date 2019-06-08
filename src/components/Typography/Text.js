import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './styles';

const TextComponent = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

TextComponent.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string
};

TextComponent.defaultProps = {
  children: null,
  size: 'md'
};

export default TextComponent;
