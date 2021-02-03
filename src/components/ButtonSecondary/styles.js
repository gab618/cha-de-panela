import styled from 'styled-components';

export const Container = styled.button`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1px;
  text-align: center;
  color: rgb(102, 102, 102);
  text-transform: uppercase;
  padding: 12px 36px;
  width: fit-content;
  transition: all 300ms ease-in-out 0s;
  background: transparent;
  border: 1px solid rgb(102, 102, 102);
  border-radius: 0px;

  &:hover {
    background: var(--main);
    color: #fff;
  }
`;
