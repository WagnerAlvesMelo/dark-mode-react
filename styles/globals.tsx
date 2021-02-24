import { createGlobalStyle, css } from 'styled-components'
import Theme from './theme'

type ThemeProps = {
  theme: Theme
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;  /* não funciona no IE e Edge */
    -webkit-font-smoothing: antialiased; /* apenas para Mac OS X/macOS */
    -moz-osx-font-smoothing: grayscale; /* apenas para Mac OS X/macOS */
    font-smooth: always; /* Non-standard */
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: "Nunito Sans" !important;
    ${({ theme }: ThemeProps) => css`
      background-color: ${theme.bg.primary};
    `} 
  }
  input {
    font-family: "Nunito Sans" !important;
  }
`

export default GlobalStyles
