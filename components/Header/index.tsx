import { Container } from '@material-ui/core'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined'
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined'
import useDarkMode from 'use-dark-mode'
import * as S from './style'

export default function Header() {
  const { value, toggle } = useDarkMode()

  return (
    <S.Wrapper position="sticky">
      <Container disableGutters maxWidth="lg">
        <S.Bar>
          <h1>Where in the world?</h1>
          <S.ModeToggle onClick={() => toggle()}>
            {!value ? <NightsStayOutlinedIcon /> : <Brightness5OutlinedIcon />}

            <p>{!value ? 'Dark Mode' : 'Light Mode'}</p>
          </S.ModeToggle>
        </S.Bar>
      </Container>
    </S.Wrapper>
  )
}
