import { useState } from 'react'
import WindowSimulation from './components/WindowSimulation'
import './App.css'

import defaultTheme from "./theme.json"

const SettingsContainer = ({settings}) => {
  if (settings.length > 0) {
    return (
      <div className='settingsContainer'>
        <h1>Linux Theme Editor</h1>
        <ul>
          {settings.map((setting, index) => {
            return (
              <li key={index}>
                {setting.value} {setting.type}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  return (
    <div className='settingsContainer'>
      <h1>Linux Theme Editor</h1>
      <p>Create and edit Linux desktop themes in your browser.</p>
    </div>
  )
}

const App = () => {
  const [theme, setTheme] = useState(defaultTheme)
  const [settings, setSettings] = useState([])
  const [deselect, setDeselector] = useState(() => () => {})

  const getProperty = (theme, size, active, name) => {
    let property = null
    if (theme.windows) {
      if (theme.windows.default) {
        property = theme.windows.default[name]
      }
      if (!property && theme.windows[active]) {
        property = theme.windows[active][name]
      }
      if (!property && theme.windows[size]) {
        property = theme.windows[size][name]
      }
    }
    return { value: '', type: '', ...property }
  }

  const selectProperties = (theme, size, active, properties, deselector) => {
    deselect()
    setDeselector(() => deselector)
    setSettings(
      properties.map(
        property => getProperty(theme, size, active, property)
      ).filter(
        property => property != null
      )
    )
  }

  return (
    <>
      <div className='windowContainer'>
        <WindowSimulation
          position={{ top:0, left:0, right:0, bottom:0 }}
          getProperty={(name) => getProperty(theme, 'maximized', 'inactive', name)}
          selectProperties={(properties, deselector) => selectProperties(
            theme, 'maximized', 'inactive', properties, deselector
          )}
        />
        <WindowSimulation
          position={{ top:40, left:40, right:40, bottom:40 }}
          getProperty={(name) => getProperty(theme, 'small', 'inactive', name)}
          selectProperties={(properties, deselector) => selectProperties(
            theme, 'small', 'inactive', properties, deselector
          )}
        />
        <WindowSimulation
          position={{ top:80, left:80, right:80, bottom:80 }}
          getProperty={(name) => getProperty(theme, 'small', 'active', name)}
          selectProperties={(properties, deselector) => selectProperties(
            theme, 'small', 'active', properties, deselector
          )}
        />
      </div>
      <SettingsContainer settings={settings} />
    </>
  )
}

export default App
