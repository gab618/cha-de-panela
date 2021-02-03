import styled from 'styled-components';

export const Container = styled.section`
  padding: 45px 15px 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    fill: #605f63;
  }

  > p {
    font-stretch: condensed;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2px;
    font-family: Poppins;
    color: rgb(34, 34, 34);
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 25px;

    @media (max-width: 768px) {
      font-size: 18px;
      font-weight: 500;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
`;
