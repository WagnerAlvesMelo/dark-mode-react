import styled, { css } from 'styled-components'
import { AppBar, Toolbar } from '@material-ui/core'

export const Bar = styled(Toolbar)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.bg.primary};
    h1 {
      font-size: ${theme.fontSizes.regular};
      color: ${theme.text.primary};
      font-weight: ${theme.fontWeights.heading};
    }
  `}
`

export const ModeToggle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${theme.text.primary};
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.bold};
    p {
      margin-left: 0.4rem;
    }
  `}
`

export const Wrapper = styled(AppBar)`
  ${({ theme }) => css`
    background-color: ${theme.bg.primary} !important;
  `}
`
