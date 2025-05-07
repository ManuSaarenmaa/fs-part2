import Course from '/src/Course';

const App = () => {

  const Total = ({ course }) => {
    const total = course.parts.reduce((s, p) => s + p.exercises, 0)
    return (
      <h4>
        Total of {total} exercises
      </h4>
    )
  }

  const course = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    id: 2,
    name: 'Node.js',
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 5
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 6
      }
    ]
  }
]

return (
  <div>
    <h1>Web development curriculum</h1>
    {course.map(course => (
      <div key={course.id}>
        <Course course={course} />
        <Total course={course} />
      </div>
    ))}
  </div>
)
}

export default App;