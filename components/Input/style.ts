import { InputLabel, OutlinedInput } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const Input = styled(OutlinedInput)`
  ${({ theme }) => css`
    margin: 1rem 0;
    font-size: ${theme.fontSizes.regular} !important;
    color: ${theme.bg.input} !important;
    background-color: ${theme.bg.elements};
  `}
`

export const Label = styled(InputLabel)`
  ${({ theme }) => css`
    margin: 1rem 0;
    font-size: ${theme.fontSizes.regular} !important;
    color: ${theme.bg.input} !important;
    font-family: 'Nunito Sans' !important;
  `}
`
