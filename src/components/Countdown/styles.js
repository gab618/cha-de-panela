import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 80px 0px;
  background-color: #fff;
  z-index: 1;

  h2 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 1px;
    margin-bottom: 40px;
    text-transform: uppercase;
    color: rgb(102, 102, 102);
    text-align: center;
  }

  .flippers {
    text-align: center;
    perspective: 800px;
    margin: 0px auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;

    > div {
      display: flex;
    }
  }
`;

export const FlipperContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  > p {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: var(--content);
    text-transform: uppercase;
    margin-top: 4px;
  }
`;
export const Flipper = styled.div`
  width: 90px;
  height: 56px;
  margin: 0px 12px;
  background: #000;

  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 24px;

  > span {
    font-family: Poppins;
    font-weight: 500;
    font-stretch: condensed;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2px;
    text-align: center;
    font-size: 32px;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 53px;
    > span {
      font-size: 24px;
    }
  }
`;
