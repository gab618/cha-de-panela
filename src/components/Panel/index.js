import React from 'react';
import WaveSvg from '../WaveSvg';

import { Container, TitleText, SubtitleText, TextWrapper } from './styles';

function Panel({ title, subtitle, text }) {
  const arrayText = text ? text.split('___') : undefined;
  const arraySub = subtitle ? subtitle.split('___') : undefined;
  return (
    <Container>
      <div className="blank-space" />
      <TitleText>
        <h2>{title}</h2>
      </TitleText>
      <SubtitleText>
        {arraySub && arraySub?.map((sub) => <h3 key={sub}>{sub}</h3>)}
      </SubtitleText>
      <WaveSvg />

      {arrayText && arrayText.length <= 1 && <div className="blank-space" />}
      {arrayText.map((line) => (
        <TextWrapper key={line}>{line}</TextWrapper>
      ))}
      <div className="blank-space" />
    </Container>
  );
}

export default Panel;
