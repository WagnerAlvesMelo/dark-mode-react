import useDarkMode from 'use-dark-mode'
import * as S from './style'

type CountryCardProps = {
  name: string
  flag: string
  population: number
  region: string
  capital: string
}

export default function CountryCard({
  flag,
  name,
  population,
  region,
  capital
}: CountryCardProps) {
  const { value } = useDarkMode()
  return (
    <S.Wrapper boxShadow={value ? 0 : 3} aria-label={name + ' info'}>
      <S.Flag src={flag} alt={name + ' flag '} />
      <div>
        <h3>{name}</h3>
        <div>
          <strong>Population: </strong> <span>{population}</span>
        </div>
        <div>
          <strong>Region: </strong> <span>{region}</span>
        </div>
        <div>
          <strong>Capital: </strong> <span>{capital}</span>
        </div>
      </div>
    </S.Wrapper>
  )
}
