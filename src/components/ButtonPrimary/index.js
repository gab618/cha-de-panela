import React from 'react';

import { Container } from './styles';

function ButtonPrimary({ text, onClick }) {
  return <Container onClick={onClick}>{text}</Container>;
}

export default ButtonPrimary;
