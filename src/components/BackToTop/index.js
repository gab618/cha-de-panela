import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { Container } from './styles';

function BackToTop() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Container onClick={scrollTop}>
      <FaAngleUp size={18} />
      <p>Voltar ao topo</p>
    </Container>
  );
}

export default BackToTop;
