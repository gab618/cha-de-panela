import React from 'react';

import { Container } from './styles';

function ButtonSecondary({ text, type }) {
  return <Container type={type}>{text}</Container>;
}

export default ButtonSecondary;
