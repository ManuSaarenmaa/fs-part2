import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '/src/Filter.jsx'
import AddPerson from '/src/AddPerson.jsx'
import RenderPersons from './renderPerson'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
   personService
   .getAll()
   .then(response => {
      setPersons(response.data)
   })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

 
  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

   
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <AddPerson
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        setPersons={setPersons}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        />
      <RenderPersons persons={personsToShow} setPersons={setPersons} />
    </div>
  )
}

export default App