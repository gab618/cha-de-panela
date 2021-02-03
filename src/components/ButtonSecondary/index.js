import React from 'react';

import { Container } from './styles';

function ButtonSecondary({ text, type, onClick }) {
  return (
    <Container onClick={onClick} type={type}>
      {text}
    </Container>
  );
}

export default ButtonSecondary;
