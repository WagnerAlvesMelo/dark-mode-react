import { Container, Grid } from '@material-ui/core'
import api from '../api'
import CountryCard from '../components/CountryCard'
import Header from '../components/Header'
import Input from '../components/Input'
import { useFetch } from '../hooks/useSwr'

export default function Home(props) {
  const initialData = props.data
  const { data } = useFetch<Country[]>('/all', initialData)

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Input label="Search for a country..." />
        <Grid spacing={10} container>
          {data.map((country) => (
            <Grid md={3} key={country.name} item>
              <CountryCard
                name={country.name}
                population={country.population}
                capital={country.capital}
                flag={country.flag}
                region={country.region}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

Home.getInitialProps = async () => {
  const data = await api.get('/all')
  const apiReturn = data.data
  return { data: apiReturn }
}

interface Country {
  id: number
  name: string
  flag: string
  population: number
  capital: string
  region: string
}
