import axios from 'axios'
import React from 'react'
import personService from './services/persons'

const AddPerson = ({ newName, newNumber, handleNameChange, handleNumberChange, setPersons, persons, setNewName, setNewNumber}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newName || !newNumber) {
      alert('Please enter name and number!')
      return
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }


   personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
  }

    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
  export default AddPerson