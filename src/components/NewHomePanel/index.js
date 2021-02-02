import React from 'react';
import WaveSvg from '../WaveSvg';

import {
  Container,
  NewHomeTitleText,
  NewHomeSubtitleText,
  NewHomeTextWrapper,
} from './styles';

function NewHomePanel() {
  return (
    <Container>
      <div className="blank-space" />
      <NewHomeTitleText>
        <h2>CASA NOVA</h2>
      </NewHomeTitleText>
      <NewHomeSubtitleText>{/* <h3></h3> */}</NewHomeSubtitleText>
      <WaveSvg />
      <NewHomeTextWrapper>
        Ficaremos muito felizes com a contribuição de vocês para montar o nosso
        lar :)
      </NewHomeTextWrapper>
    </Container>
  );
}

export default NewHomePanel;
