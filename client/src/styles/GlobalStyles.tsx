import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &.light-mode{
  }
  
  &.dark-mode {
   
  }
  --color-button-secondary: #f5f7f9;
  --color-button-secondary-hover: #e1e5ea;
  --color-accent: #4a90e2;
  --color-accent-hover: #357abd;
  --color-text: #1a202c;
  --color-error: #EF5350;

  --color-badge: #e53e3e;
  --color-warning: #e53e3e;
  --color-warning-disabled: #922626;
  --color-warning-shade: #feb2b2;
  --color-warning-hover: #c53030;

  --color-input-border: #e1e1e1;
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
  border: none;
}

*:disabled {
  cursor: not-allowed;
}
`;

export default GlobalStyles;
