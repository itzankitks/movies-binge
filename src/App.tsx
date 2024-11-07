import React from 'react'
import Hello from './components/hello'

interface User {
  id: string,
  name: string
}

const App = () => {

  let isAdmin = true
  let users : User[] = [
    {
      id: "1",
      name: "John"
    },
    {
      id: "2",
      name: "Doe"
    }
  ]

  return (
    <div>{
        isAdmin 
          ? <div>
            <Hello />
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </div>
          : <h1>Hello User</h1>
      }
    </div>
  )
}

export default App