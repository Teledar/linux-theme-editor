import { useState } from 'react'
import WindowSimulation from './components/WindowSimulation'

const defaultWindowStyle = {
  backgroundColor: 'white',
}

const defaultTitleBarStyle = {
  height: 20,
  textAlign: 'center',
}

const defaultWindowButtons = [
  {
    name: 'close',
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    image: '/src/assets/close.svg',
    hoverImage: '/src/assets/close-hover.svg',
  },
  {
    name: 'minimize',
    position: 'absolute',
    top: 0,
    right: 40,
    width: 20,
    height: 20,
    image: '/src/assets/minimize.svg',
    hoverImage: '/src/assets/minimize-hover.svg',
  },
]

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
      buttons: [
        ...defaultWindowButtons,
        {
          name: 'maximize',
          position: 'absolute',
          top: 0,
          right: 20,
          width: 20,
          height: 20,
          image: '/src/assets/maximize.svg',
          hoverImage: '/src/assets/maximize-hover.svg',
        }
      ],
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
      backgroundColor: 'dimgray',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      buttons: [
        ...defaultWindowButtons,
        {
          name: 'maximize',
          position: 'absolute',
          top: 0,
          right: 20,
          width: 20,
          height: 20,
          image: '/src/assets/maximize.svg',
          hoverImage: '/src/assets/maximize-hover.svg',
        },
      ],
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
      backgroundColor: 'dimgray',
      buttons: [
        ...defaultWindowButtons,
        {
          name: 'restore',
          position: 'absolute',
          top: 0,
          right: 20,
          width: 20,
          height: 20,
          image: '/src/assets/restore.svg',
          hoverImage: '/src/assets/restore-hover.svg',
        },
      ],
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
