import React from 'react';
import WaveSvg from '../WaveSvg';

import {
  Container,
  StepsTitleText,
  StepsSubtitleText,
  StepsTextWrapper,
} from './styles';

function StepsPanel() {
  return (
    <Container>
      <StepsTitleText>
        <h2>MATHEUS & TAMARA</h2>
      </StepsTitleText>
      <StepsSubtitleText>
        <h3>xx de fevereiro de 2021</h3>
      </StepsSubtitleText>
      <WaveSvg />
    </Container>
  );
}

export default StepsPanel;
