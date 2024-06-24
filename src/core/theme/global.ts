import 'react-toastify/dist/ReactToastify.min.css';
import { createGlobalStyle } from '~/modules';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    text-rendering: optimizeLegibility !important;
    overscroll-behavior: contain;
    scrollbar-width: none;
    -webkit-font-smoothing: antialiased !important;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
  html {
    min-height: 100vh;
    width: 100%;
  }
  button {
    cursor: pointer;
  }
  div {
    display: flex;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
