import React from 'react';
import WaveSvg from '../WaveSvg';

import { Container, TitleText, SubtitleText, TextWrapper } from './styles';

function Panel({ title, subtitle, text }) {
  return (
    <Container>
      <div className="blank-space" />
      <TitleText>
        <h2>{title}</h2>
      </TitleText>
      <SubtitleText>
        <h3>{subtitle}</h3>
      </SubtitleText>
      <WaveSvg />
      <TextWrapper>{text}</TextWrapper>
    </Container>
  );
}

export default Panel;
