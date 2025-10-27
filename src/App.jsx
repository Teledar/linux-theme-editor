import { useState } from 'react'
import WindowSimulation from './components/WindowSimulation'

const defaultWindowStyle = {
  backgroundColor: 'white',
}

const defaultTitleBarStyle = {
  height: 20,
  textAlign: 'center',
}

const defaultStyle = {
  window: {
    ...defaultWindowStyle,
    borderTop: 'none',
    borderLeft: 'solid 2px black',
    borderRight: 'solid 2px black',
    borderBottom: 'solid 2px black',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    titleBar: {
      ...defaultTitleBarStyle,
      backgroundColor: 'black',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  },
  unfocusedWindow: {
    ...defaultWindowStyle,
    borderTop: 'none',
    borderLeft: 'solid 2px gray',
    borderRight: 'solid 2px gray',
    borderBottom: 'solid 2px gray',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    titleBar: {
      ...defaultTitleBarStyle,
      backgroundColor: 'gray',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  },
  maximizedWindow: {
    ...defaultWindowStyle,
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    titleBar: {
      ...defaultTitleBarStyle,
      backgroundColor: 'gray',
    },
  },
}

const App = () => {
  const [style, setStyle] = useState(defaultStyle)

  return (
    <>
      <h1>Linux Theme Editor</h1>
      <WindowSimulation 
        style={style.maximizedWindow}
        position={{ top:0, left:0, right:0, bottom:0 }} 
      />
      <WindowSimulation 
        style={style.unfocusedWindow}
        position={{ top:40, left:40, right:10, bottom:10 }} 
      />
      <WindowSimulation 
        style={style.window}
        position={{ top:80, left:80, right:20, bottom:20 }} 
      />
    </>
  )
}

export default App
