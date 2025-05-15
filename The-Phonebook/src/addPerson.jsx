import React from 'react'
import personService from './services/persons'


const AddPerson = ({ newName, newNumber, handleNameChange, handleNumberChange, setPersons, persons, setNewName, setNewNumber, setErrorMessage}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newName || !newNumber) {
      alert('Please enter name and number!')
      return
    }
    
    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedNumber = { ...existingPerson, number: newNumber }
        personService
          .update(existingPerson.id, updatedNumber)
          .then(response => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data))
            setNewName('')
            setNewNumber('')
            setErrorMessage({message: `Updated ${newName}'s number`, type: 'success'})
            setTimeout(() => {
              setErrorMessage({message: null, type: null})
            }, 5000)
          })
          .catch(error => {
            console.error("Error updating person:", error)
            setErrorMessage({message: `Information of ${newName} has already been removed from server`, type: 'error'})
            setTimeout(() => {
              setErrorMessage({message: null, type: null})
            }, 5000)
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          })
      }
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

   personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
        setErrorMessage({message:`Added ${newName}`, type: 'success'})
        setTimeout(() => {
          setErrorMessage({message: null, type: null})
        }, 5000)
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