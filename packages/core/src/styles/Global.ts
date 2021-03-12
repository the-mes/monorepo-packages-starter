import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  :root {
    --desktop-background: #55aaaa;
  }

  body {
    min-width: 320px;
    background-color: var(--desktop-background);
  }
`;

export default Global;
