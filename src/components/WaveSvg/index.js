import styled from 'styled-components';

import React from 'react';

function Logo() {
  return (
    <QuizLogo>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="9">
          <path
            d="M95.195 0c-3.382 0-5.093 2.076-6.605 3.91-1.429 1.733-2.662 3.228-5.164 3.228-2.503 0-3.735-1.491-5.17-3.233C76.748 2.075 75.036 0 71.656 0c-3.382 0-5.094 2.078-6.604 3.912-1.43 1.733-2.663 3.226-5.164 3.226-2.506 0-3.738-1.495-5.168-3.23C53.21 2.076 51.498 0 48.117 0c-3.384 0-5.096 2.078-6.608 3.908-1.428 1.735-2.663 3.23-5.169 3.23-2.507 0-3.742-1.495-5.173-3.228C29.657 2.078 27.944 0 24.545 0c-3.418 0-5.203 2.168-6.639 3.91-1.609 1.951-2.842 3.228-5.239 3.228-2.449 0-3.798-1.397-5.306-3.228-.28-.338-.568-.674-.867-.993-.695-.775-1.46-1.484-2.418-1.979A7.15 7.15 0 00.47 0C.31 0 .156.021 0 .03v1.918c.34-.054.688-.088 1.043-.088.93 0 1.684.208 2.34.557.682.4 1.27.922 1.803 1.475.343.375.677.78 1.023 1.2C7.717 6.924 9.43 9 12.812 9c3.383 0 5.094-2.076 6.604-3.91 1.429-1.733 2.662-3.23 5.165-3.23 2.504 0 3.736 1.498 5.166 3.235C31.257 6.925 32.969 9 36.35 9c3.384 0 5.094-2.076 6.604-3.908 1.427-1.735 2.66-3.232 5.165-3.232 2.499 0 3.732 1.497 5.166 3.232C54.792 6.924 56.502 9 59.888 9c3.38 0 5.091-2.074 6.603-3.908 1.428-1.734 2.662-3.232 5.166-3.232 2.504 0 3.737 1.498 5.164 3.232C78.33 6.924 80.04 9 83.426 9c3.38 0 5.09-2.074 6.602-3.908 1.43-1.734 2.662-3.232 5.167-3.232.284 0 .55.026.805.065V.063C95.736.034 95.48 0 95.195 0"
            fill="#222"
            fillRule="evenodd"
          />
        </svg>
      </span>
    </QuizLogo>
  );
}

const QuizLogo = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  > span {
    display: flex;
  }
`;

export default Logo;
