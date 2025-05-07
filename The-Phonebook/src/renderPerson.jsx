import React from "react"

const RenderPersons = ({ persons}) => {
 <h2>Numbers</h2>
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}
export default RenderPersons