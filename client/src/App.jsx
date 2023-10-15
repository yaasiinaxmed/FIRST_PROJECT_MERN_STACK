import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((users) => {
      setUsers(users.data)
    }).catch(err => console.log(err))
  }, [])

  const handleSubmit = () => {
    axios.post("http://localhost:3001/createUser", {name, age}).then((user) => {
      console.log(user)
      setUsers(user)
    }).catch(err => console.log(err))
  }

  return (
    <div>
      {users.map((user) => (
        <div>
          <h1>{user.name}</h1>
          <h3>{user.age}</h3>
        </div>
      ))}
      <br/>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <input type="text" onChange={(e) => setAge(e.target.value)}/>
        <button onClick={handleSubmit}>Create User</button>
      </div>
    </div>
  )
}

export default App
