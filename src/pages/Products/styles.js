import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 0px;
    padding: 20px;
    height: 380px;

    .img-wrapper {
      margin-bottom: 24px;
      max-height: 180px;
      max-width: 180px;
      min-height: 180px;
      height: 100%;
      display: flex;
      margin: 0 auto;
      > img {
        display: block;
        max-width: 180px;
        max-height: 180px;
        width: auto;
        height: auto;
      }
    }

    /* img {
      align-self: center;
      width: 120px;
      border-radius: 4px;
      margin-bottom: 10px;
    } */

    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;

      > strong {
        font-family: Poppins;
        font-size: 12px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: 1px;
        text-align: center;
        color: var(--content);
        width: 100%;
        overflow-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }

      > span {
        font-family: Poppins;
        font-size: 16px;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: 1px;
        text-align: center;
        color: var(--content);
        font-weight: bold;
        margin: 5px 0 16px;
      }
    }

    button {
      background: transparent;
      color: var(--main);
      border: 0;
      border-radius: 0px;
      overflow: hidden;
      margin-top: auto;

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
      /* padding: 12px 36px; */
      /* width: fit-content; */
      transition: all 300ms ease-in-out 0s;
      /* background: transparent; */
      border: 2px solid var(--main);
      border-radius: 0px;
      min-height: 56px;

      display: flex;
      align-items: center;
      /* transition: background 0.25s; */

      &:hover {
        background: var(--main);
        color: #fff;

        > span {
          color: #fff;
        }
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: var(--main);
        color: #fff;

        svg {
          margin-right: 5px;
          fill: #fff;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        padding: 0 5px;
      }
    }
  }
`;
