import { useState } from 'react'

const SettingChanger = ({setting}) => {
  const [ value, setValue ] = useState(setting.value)

  const changer = (event) => {
    setValue(event.target.value)
    setting.setter(event.target.value)
  }
  
  return (
    <div>
      <p>{setting.description}</p>
      {
        setting.type == 'color' ? 
          <input id={setting.parent + setting.name} type="color" value={value} 
            onChange={(event) => {
              setValue(event.target.value)
              setting.setter(event.target.value)
            }} /> :
        setting.type == 'length' ? 
          <input id={setting.parent + setting.name} type="number" min="0" max="100" 
            value={value} onChange={(event) => {
              setValue(event.target.value)
              setting.setter(Number.parseInt(event.target.value))
            }} /> :
        <p></p>
      }
    </div>
  )
}

const SettingsContainer = ({settings}) => {
  if (Object.keys(settings).length > 0) {
    return (
      <div className='settingsContainer'>
        <h1>Linux Theme Editor</h1>
        {
          Object.keys(settings).map((group, index) => {
            return (
              <div key={index}>
                <h2>{group}</h2>
                {settings[group].map((setting) => {
                  return (
                    <SettingChanger setting={setting} key={setting.parent + setting.name} />
                  )
                })}
              </div>
            )
          })
        }
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

export default SettingsContainer