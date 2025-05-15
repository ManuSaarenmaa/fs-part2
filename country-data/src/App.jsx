import { useState, useEffect} from 'react'
import countryDetail from './CountryDetails.jsx'
import countryApi from './services/countryApi.js'
import CountryDetail from './CountryDetails.jsx'

const App = () => {
  const [country, setCountry] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCountry, setFilteredCountry] = useState([])
  const [selectCountry, setSelectCountry] = useState(null)

useEffect(() => {
  countryApi
    countryApi.getAll().then(response => {
      setCountry(response.data)
    })
  }, [])

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    setSelectCountry(null)

    if (term === '') {
      setFilteredCountry([])
      return
    }

    const matches = country.filter((country) =>
      country.name.common.toLowerCase().includes(term)
    ).slice(0, 10)
    setFilteredCountry(matches)
  }
console.log(filteredCountry)
  
  return (
    <div>
      <p>find countries</p>
      <input type="text" value={searchTerm} onChange={handleSearch}/>

      {selectCountry ? (
        <CountryDetail country={selectCountry} />
      ) : filteredCountry.length === 1 ? (
        <CountryDetail country={filteredCountry[0]} />
      ) : (
        <ul>
          {filteredCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}
            <button onClick={() => setSelectCountry(country)}>Show</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  )
}
  
export default App
