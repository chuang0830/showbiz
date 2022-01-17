import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body,
html,
div,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
form,
input,
button,
textarea,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
img {
  border: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
button:focus,
input:focus,
textarea:focus,
select:focus,
a:focus {
  outline: 0;
}
input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="text"],
textarea,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
}
button {
  border: 0;
  background-color: transparent;
  outline: none;
  -webkit-appearance: none;
 
}

select::-ms-expand {
  display: none;
}

input::-ms-clear {
  display: none;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
main,
nav,
section {
  display: block;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
`
