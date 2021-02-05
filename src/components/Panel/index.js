import React from 'react';
import WaveSvg from '../WaveSvg';

import { Container, TitleText, SubtitleText, TextWrapper } from './styles';

function Panel({ title, subtitle, text }) {
  const arrayText = text.split('___');
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
      {arrayText.map((line) => (
        <TextWrapper>{line}</TextWrapper>
      ))}
      <div className="blank-space" />
    </Container>
  );
}

export default Panel;
