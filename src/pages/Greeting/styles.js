import styled from 'styled-components';

export const Container = styled.main`
  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 16px;
  }
`;

export const Cover = styled.div`
  margin-top: 100px;
  width: 100vw;
  height: 56.25vw;
  max-height: calc(100vh - 100px);
  position: relative;

  @media (max-width: 768px) {
    margin-top: 64px;
    max-height: calc(100vh - 64px);
    top: -64px;
  }
  .figure::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    background-image: ${(props) => `url(${props.imgSrc})`};
    background-size: cover;
    filter: brightness(75%);
    z-index: -1;
  }

  .cover-container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgba(34, 34, 34, 0.3);
    pointer-events: none;
    z-index: 1;

    > figure {
      /* position: relative; */
      z-index: 15;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        -webkit-box-pack: center;

        height: 100%;
        max-width: 100%;

        > strong {
          color: #fff;
          font-family: 'Barlow Condensed';
          font-style: normal;
          font-weight: bold;
          font-size: 88px;
          text-transform: uppercase;
          letter-spacing: 4px;
          line-height: 1;
          font-stretch: condensed;
        }

        > span {
          font-size: 32px;
          font-style: normal;
          line-height: normal;
          text-align: center;
          font-weight: bold;
          font-stretch: condensed;
          letter-spacing: 2px;
          color: var(--body);
          margin-top: 24px;
        }
        .min-name {
          display: none;
        }
        @media (max-width: 768px) {
          > strong {
            font-size: 48px;
            /* font-weight: 300; */
            font-stretch: normal;
            letter-spacing: normal;
          }

          > span {
            margin-top: 16px;
            font-size: 20px;
          }
          .min-name {
            display: block;
          }
          .full-name {
            display: none;
          }
        }
      }
    }
  }
`;

export const Text = styled.section`
  width: 100%;
  background: #fff;

  .text-wrapper {
    max-width: 1110px;
    margin: 0px auto;
    padding: 80px 15px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 1px;
    color: var(--content);
    text-align: center;
    overflow-wrap: break-word;

    > p {
      /* line-height: 107%; */
      padding: 10px 0px;
      clear: both;
    }

    > h2 {
      font-weight: 500;
    }
  }
`;

export const Photo = styled.div`
  width: 100%;
  .photo-wrapper {
    width: 100%;
    max-width: 100%;

    > figure {
      padding-top: 56.25%;
      background-image: ${(props) => `url(${props.imgSrc})`};
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
