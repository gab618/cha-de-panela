import React from 'react';

import { Container } from './styles';

function ButtonPrimary({ text, onClick, type }) {
  return (
    <Container onClick={onClick} type={type}>
      {text}
    </Container>
  );
}

export default ButtonPrimary;
