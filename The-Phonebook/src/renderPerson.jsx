import React from "react"
import personService from "./services/persons"


const renderPersons = ({ persons, setPersons}) => {
const handleDelete = (person) => {
  if (window.confirm(`Delete ${person.name} ?`)) {
    personService
      .deletePerson(person.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
      .catch(error => {
        console.error("Error deleting person:", error)
        alert(`The person '${person.name}' was already deleted from the server`)
        setPersons(persons.filter(p => p.id !== person.id))
      })
  }
}

  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default renderPersons