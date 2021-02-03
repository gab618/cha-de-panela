import styled from 'styled-components';

export const Container = styled.footer`
  padding: 40px 15px;
  border-top: 1px solid rgba(96, 95, 99, 0.1);
`;

export const FooterContent = styled.div`
  max-width: 1110px;
  margin: 0px auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: center;

  > p {
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 1px;
    text-align: center;
    color: var(--content);
  }
`;
