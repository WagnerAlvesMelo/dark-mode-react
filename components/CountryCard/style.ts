import { Box } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Box)`
  position: relative;
  ${({ theme }) => css`
    div {
      background-color: ${theme.bg.elements};
      width: 100%;
      border-radius: 0 0 2% 2%;
      padding: 2rem;
      font-size: ${theme.fontSizes.small};
      color: ${theme.text.primary};

      strong {
        font-weight: ${theme.fontWeights.bold};
        margin-right: 1rem;
      }
      div {
        display: flex;
        padding: 0;
      }
      h3 {
        font-size: ${theme.fontSizes.regular};
        margin-bottom: 1.2rem;
        font-weight: ${theme.fontWeights.heading} !important;
      }
    }
  `}
`

export const Flag = styled.img`
  width: min(60rem, 100%);
  height: 15rem;
  display: block;
  object-fit: cover;
  border-radius: 2% 2% 0 0;
`
