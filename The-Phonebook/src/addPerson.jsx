import axios from 'axios';
import React from 'react'

const AddPerson = ({ newName, newNumber, handleNameChange, handleNumberChange, setPersons, persons }) => {
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
    setPersons(persons.concat(personObject))

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
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