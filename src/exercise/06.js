// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState()
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmitUsername(username)
      }}
    >
      <div>
        <label htmlFor="name">Username:</label>
        <input
          value={username}
          onChange={({target: {value}}) => {
            setUsername(value.toLowerCase())
          }}
          type="text"
        />
      </div>
      <button disabled={!username} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
