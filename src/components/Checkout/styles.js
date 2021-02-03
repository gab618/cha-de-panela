import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      margin-left: 16px;
    }
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #333;
    font-weight: bold;
  }

  strong {
    color: #333;
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    text-align: center;
  }

  > svg {
    margin-top: 16px;
  }

  > span {
    margin-top: 24px;
    text-align: center;
  }

  > p,
  strong {
    margin-top: 8px;
    font-size: 9px;
    color: #999;
  }
`;

export const CheckoutWrapper = styled.div`
  width: 100%;
  margin: 0 auto 0;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 50px 95px;
  background: #fff;
`;
