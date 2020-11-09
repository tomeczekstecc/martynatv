import styled, { createGlobalStyle } from 'styled-components';
import Background from './assets/img/clouds.jpg';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
html {
  height: 100%;
}
* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
 body {
background-image: url(${Background});
background-position: top;
background-repeat: no-repeat;
background-size: cover;
background-clip: content-box;

 }
img{
  margin-top: 90vh;
}
`;
