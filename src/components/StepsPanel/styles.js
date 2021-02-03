import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 78px;
  height: 100%;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--lightBackground);

  .blank-space {
    width: 100%;
    height: 80px;
  }
`;

export const StepsTitleText = styled.div`
  width: 100%;
  min-height: 78px;
  height: 100%;
  padding: 20px 15px;
  > h2 {
    font-size: 32px;
    font-weight: 500;
    font-stretch: condensed;
    font-style: normal;
    letter-spacing: 2px;
    text-align: center;
    color: var(--title-text-color);
    font-family: 'Barlow Condensed';
    text-transform: uppercase;
    line-height: normal;
  }
`;

export const StepsSubtitleText = styled.div`
  width: 100%;
  min-height: 70px;
  height: 100%;
  padding: 20px 15px;

  h3 {
    font-weight: 300;
    font-stretch: normal;
    line-height: 1.5;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 2px;
    color: rgb(34, 34, 34);
    text-transform: uppercase;
    max-width: 1110px;
    margin: 0px auto;
  }
`;

export const StepsTextWrapper = styled.section`
  width: 100%;
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
`;
