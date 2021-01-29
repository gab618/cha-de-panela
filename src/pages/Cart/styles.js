import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #1e2328;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #24494b;
      color: #ddd;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.25s;

      &:hover {
        background: ${darken(0.03, '#24494b')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    text-align: left;
    padding: 12px;
    color: #999;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #24494b;
  }

  img {
    height: 100px;
  }

  strong {
    color: #ddd;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #24494b;
      border-radius: 4px;
      padding: 6px;
      width: 50px;
      background: #1e2328;
      color: #eee4d0;
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;

    transition: background 0.25s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    color: #ddd;
    font-size: 28px;
    margin-left: 5px;
  }
`;
