import styled from 'styled-components';

export const Container = styled.main``;

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
      width: 100%;
      height: 100%;
      background-image: ${(props) => `url(${props.imgSrc})`};
      background-size: cover;
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
  }
`;
