import { useState } from 'react'
import WindowSimulation from './components/WindowSimulation'

const App = () => {
  const [titleBarColor, setTitleBarColor] = useState('darkgray')

  return (
    <>
      <h1>Linux Theme Editor</h1>
      <WindowSimulation titleBarColor={titleBarColor} maximized={false} />
    </>
  )
}

export default App
