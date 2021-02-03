import styled from 'styled-components';

export const Container = styled.main``;

export const Cover = styled.div`
  margin-top: 100px;
  width: 100vw;
  height: 56.25vw;
  max-height: calc(100vh - 100px);
  position: relative;

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
