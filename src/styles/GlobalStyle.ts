import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  * {
    margin: 0px;
    padding: 0px;
    box-sizing:border-box;
  }

  body {
    font-size:1rem;
  }

  a {
    text-decoration:none;
    color:inherit;
    cursor: pointer;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  input:focus,
  button:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }
  
  button {
    cursor: pointer;
    border: none;
  }
`;

export default GlobalStyle;
