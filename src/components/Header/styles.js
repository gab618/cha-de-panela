import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0px 15px;
  min-height: 100px;
  transition: background 0.5s ease 0s;
  z-index: 10;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(34, 34, 34, 0.2);
  @media (max-width: 768px) {
    min-height: 64px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0px auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  > a {
    font-size: 32px;
    font-stretch: condensed;
    line-height: normal;
    letter-spacing: 2px;
    text-align: center;
    text-decoration: none;
    font-family: Barlow;
    margin-top: 0px;
    color: rgb(34, 34, 34);
    font-style: normal;
    font-weight: 300;
  }
`;

export const Menu = styled.nav``;

export const MenuWrapper = styled.ul`
  display: flex;
  position: relative;
  list-style: none;

  .divider {
    border-right: 1px solid rgba(34, 34, 34, 0.2);
    margin-right: 16px;
  }

  > li {
    display: flex;
    margin-right: 20px;
    /* background: green; */

    > a {
      display: flex;
      align-items: center;
      text-decoration: none;

      > div {
        strong {
          font-size: 18px;
          font-weight: 500;
          font-stretch: condensed;
          text-transform: uppercase;
          font-style: normal;
          line-height: normal;
          letter-spacing: 2px;
          color: rgb(34, 34, 34);
          cursor: pointer;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          font-family: Poppins;
          @media (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.25s;
  position: relative;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }

  .items-counter {
    position: absolute;
    display: flex;
    justify-content: center;
    background: var(--menu);
    color: #fff;
    border-radius: 50%;
    top: 0px;
    right: -18px;
    width: 16px;
    height: 16px;
    font-size: 11px;
    line-height: 1.6;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  }
`;
