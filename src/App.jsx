import { useState } from 'react'
import WindowSimulation from './components/WindowSimulation'

const defaultWindowStyle = {
  backgroundColor: 'white',
}

const defaultStyle = {
  window: {
    ...defaultWindowStyle,
    borderTop: 'none',
    borderLeft: 'solid 2px black',
    borderRight: 'solid 2px black',
    borderBottom: 'solid 2px black',
  },
  maximizedWindow: {
    ...defaultWindowStyle,
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
  },
  titleBar: {
    backgroundColor: 'black',
    height: 20,
  },
}

const App = () => {
  const [style, setStyle] = useState(defaultStyle)

  return (
    <>
      <h1>Linux Theme Editor</h1>
      <WindowSimulation windowStyle={style.window} titleBarStyle={style.titleBar}
      position={{ top:10, left:10, right:10, bottom:10 }} />
    </>
  )
}

export default App
