import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &.light-mode{
  }
  
  &.dark-mode {
   
  }
  --color-text: #1a202c;
  --color-error: #EF5350;
  --color-input-border: rgb(230, 227, 227);
  --inputfield-color: #f3f4f6ff;
  --themecolor-secondary: #00bdd6ff;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--color-text);
  -webkit-box-shadow: 0 0 0px 1000px var(--color-background) inset;
  transition: background-color 5000s ease-in-out 0s;
  caret-color: var(--color-text)
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;

  user-select: none;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-text);
  background-color: var(--color-background);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

input,
textarea,
select {
  background-color: inherit;
}

button {  
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}
`;

export default GlobalStyles;
