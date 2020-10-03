// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const smallBox = (
  <Box style={{background: 'lightblue'}} size="small">
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box style={{background: 'pink'}} size="medium">
    medium pink box
  </Box>
)
const largeBox = (
  <Box style={{background: 'orange'}} size="large">
    large orange box
  </Box>
)

function Box({size, style, children}) {
  return (
    <div className={`box box--${size}`} style={{...style, fontStyle: 'italic'}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
