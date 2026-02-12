import { useState } from 'react'
import WindowSimulation from './components/WindowSimulation'
import SettingsContainer from './components/SettingsContainer'
import './App.css'

import defaultTheme from './theme.json'

const App = () => {
  const [theme, setTheme] = useState(defaultTheme)
  const [settings, setSettings] = useState({})
  const [deselect, setDeselector] = useState(() => () => {})

  const title = name => name[0].toUpperCase() + name.substring(1)

  const getProperty = (size, active, name) => {
    let property = {
      parent: '',
      name: name,
      group: '', 
      value: '', 
      type: '', 
      description: '' ,
      setter: (value) => {}
    }
    if (theme.windows) {
      if (theme.windows.default) {
        property = {
          parent: 'default',
          name: name,
          group: "Window", 
          ...theme.windows.default[name],
          setter: value => {
            const newTheme = { ...theme }
            newTheme.windows.default[name].value = value
            setTheme(newTheme)
          }
        }
      }
      if (!property.type && theme.windows[active]) {
        property = {
          parent: active,
          name: name,
          group: title(active) + " window",
          ...theme.windows[active][name],
          setter: value => {
            const newTheme = { ...theme }
            newTheme.windows[active][name].value = value
            setTheme(newTheme)
          }
        }
      }
      if (!property.type && theme.windows[size]) {
        property = {
          parent: size,
          name: name, 
          group: title(size) + " window", 
          ...theme.windows[size][name],
          setter: value => {
            const newTheme = { ...theme }
            newTheme.windows[size][name].value = value
            setTheme(newTheme)
          }
        }
      }
    }
    return property
  }

  const selectProperties = (size, active, properties, deselector) => {
    deselect()
    setDeselector(() => deselector)
    setSettings(
      properties.map(
        property => getProperty(size, active, property)
      ).filter(
        property => property != null
      ).reduce((map, property) => {
        if (map[property.group]) {
          map[property.group] = [ property, ...map[property.group] ]
        } else {
          map[property.group] = [ property ]
        }
        return map
      }, {})
    )
  }

  return (
    <>
      <div className='windowContainer'>
        <WindowSimulation
          position={{ top:0, left:0, right:0, bottom:0 }}
          getProperty={(name) => getProperty('maximized', 'inactive', name)}
          selectProperties={(properties, deselector) => selectProperties(
            'maximized', 'inactive', properties, deselector
          )}
        />
        <WindowSimulation
          position={{ top:40, left:40, right:40, bottom:40 }}
          getProperty={(name) => getProperty('small', 'inactive', name)}
          selectProperties={(properties, deselector) => selectProperties(
            'small', 'inactive', properties, deselector
          )}
        />
        <WindowSimulation
          position={{ top:80, left:80, right:80, bottom:80 }}
          getProperty={(name) => getProperty('small', 'active', name)}
          selectProperties={(properties, deselector) => selectProperties(
            'small', 'active', properties, deselector
          )}
        />
      </div>
      <SettingsContainer settings={settings} />
    </>
  )
}

export default App
