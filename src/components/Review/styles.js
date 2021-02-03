import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--lightBackground);

  footer {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    max-width: 950px;
    padding: 0px 15px;
    margin: 40px auto 0px;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      button {
        width: 100%;
        margin-bottom: 16px;
      }
    }
  }
`;

export const ProductTableWrapper = styled.div`
  width: 100%;
  background: #fff;
`;
export const ProductTable = styled.div`
  width: 100%;
  margin: 0 auto 0;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 95px;
  background: #fff;

  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    letter-spacing: 1px;
    padding: 0px 15px;
  }

  .desc {
    max-width: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      max-width: 50%;
      padding-right: 15px;
      flex-direction: column;
      align-items: flex-start;
    }

    .img-wrapper {
      margin-bottom: 24px;
      max-height: 65px;
      max-width: 65px;
      min-height: 65px;
      height: 100%;
      margin: auto 0;
      > img {
        display: block;
        max-width: 65px;
        max-height: 65px;
        width: auto;
        height: auto;
      }
    }

    > p {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: 1px;
      color: rgb(34, 34, 34);
      margin-left: 30px;
      text-align: left;
      line-height: 1.43;
      @media (max-width: 768px) {
        margin-left: 0px;
      }
    }
  }

  .amount {
    max-width: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      max-width: 50%;
      padding-left: 15px;
    }
  }

  .price {
    max-width: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .price-mobile {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      max-width: 100%;
      width: 100%;
      margin-top: 40px;
    }
  }
`;
export const TableHeader = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 1px;
  text-align: center;
  color: rgb(34, 34, 34);
  line-height: 1;
  width: 100%;
  display: flex;
  border-bottom: 1px solid var(--formBorder);
  margin-bottom: 26px;
  padding: 80px 0px 22px;

  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    letter-spacing: 1px;
  }
`;

export const TableItem = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1px;
  text-align: center;
  color: rgb(34, 34, 34);
  width: 100%;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  border-bottom: 1px solid var(--formBorder);
  margin-bottom: 26px;
  padding: 0px 0px 21px;
  flex-wrap: wrap;
`;

export const IncrementBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  > div {
    margin: 0px 8px;
    width: 56px;
    height: 56px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid var(--formBorder);
    user-select: none;
    font-weight: bolder;
  }

  > button {
    background: none;
    border: none;
  }
`;

export const RemoveButton = styled.div`
  font-family: Poppins;
  font-size: 10px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  user-select: none;
  color: rgb(34, 34, 34);
  cursor: pointer;
`;

export const TotalContainer = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 1px;
  text-align: center;
  color: rgb(34, 34, 34);
  line-height: normal;
  font-weight: bold;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid var(--formBorder);
  margin-bottom: 80px;
  padding: 0px 0px 21px;

  strong {
    color: rgb(34, 34, 34);
    font-size: 24px;
  }

  @media (max-width: 768px) {
    .desc,
    .amount,
    .price {
      display: none;
    }
  }
`;
