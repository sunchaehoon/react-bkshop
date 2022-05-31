import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
  }

  input{
    background:none;
    outline:none;
    border:none;
  }

  a{
    text-decoration: none;
    text-decoration-line: none;
  }
  
  button{
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;