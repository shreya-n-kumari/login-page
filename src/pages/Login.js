// import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser (event) {
    event.preventDefault()
    const response = await fetch('http://localhost:8000/login', {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <br />
        <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder='Email'
        />
        <br />
        <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder='Password'
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default App;
