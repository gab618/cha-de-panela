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

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #eee4d0;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
