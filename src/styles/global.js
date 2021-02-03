import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    color: var(--main);
    max-width: 100%;
  }

  body {
    background: var(--lightBackground);
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin-top: 100px;
  }

  :root {
    --coupleName: #222222;
    --menu: #222222;
    --content: #666666;
    --title-text-color: #222222;
    --main: #222222;
    --body: #fff;
    --formBorder: #e0e0e0;
    --lightBackground: #f9f9f9;
    --darkBackground: #222222;
    --transparentBackground: rgba(0,0,0,0);
    --alert: #ef5350;
    --error: #ef5350;
    --base-font-family: "poppins-light";
    --menu-font-family: "BarlowCondensed";
    --title-font-family: "BarlowCondensed";
    --name-font-family: "Barlow-Medium";
  }
`;
