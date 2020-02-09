import { createGlobalStyle } from 'styled-components'
 

const GlobalStyles = createGlobalStyle`
  html, body, div, form, fieldset, legend, label
  {
    margin: 0;
    padding: 0; 
    font-size: 62.5%;
    font-family: 'Muli', sans-serif;
  }

  table
  {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th, td
  {
    text-align: left;
    vertical-align: top;
  }

  h1, h2, h3, h4, h5, h6, th, td, caption { font-weight:normal; }

  img { border: 0; }

  .container {
    max-width: 128rem;
    margin: auto;
  }

`;

export default GlobalStyles
