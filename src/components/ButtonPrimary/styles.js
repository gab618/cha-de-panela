import styled from 'styled-components';

export const Container = styled.button`
  font-family: Poppins;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1px;
  text-align: center;
  font-weight: bold;
  color: var(--main);
  text-transform: uppercase;
  padding: 12px 36px;
  width: fit-content;
  transition: all 300ms ease-in-out 0s;
  background: transparent;
  border: 2px solid var(--main);
  border-radius: 0px;

  &:hover {
    background: var(--main);
    color: #fff;
  }
`;
