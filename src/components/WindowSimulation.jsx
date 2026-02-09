import { useState } from 'react'
import { useContext } from 'react'
import WindowContext from './WindowContext'
import './WindowSimulation.css'

const Selector = (props) => {
  const [className, setClass] = useState('selector')
  const context = useContext(WindowContext)

  const select = () => {
    setClass('selector selected')
    context.selectProperties(props.properties, () => setClass('selector'))
  }

  const style = {
    ...props.position,
    position: 'absolute',
    zIndex: 1,
    background: 'transparent',
  }
  return <div className={className} style={style} id={props.id} onClick={select}></div>
}

const TitleBarButton = (props) => {
  const context = useContext(WindowContext)

  const style = {
    top: 0,
    width: context.getProperty('buttonWidth').value,
    height: context.getProperty('buttonHeight').value,
    position: 'absolute',
  }

  const imageStyle = {
    ...style
  }

  const position = context.getProperty(props.name + 'ButtonPosition').value
  if (position < 0) {
    style.right = -position * 20 - 20
  } else {
    style.left = position * 20 - 20
  }

  return (
    <span className='window-button' style={style}>
      <div className='normal' style={{
        ...imageStyle,
        background: `url('${context.getProperty(props.name + 'Icon').value}')`
      }} />
      <div className='hover' style={{
        ...imageStyle,
        background: `url('${context.getProperty(props.name + 'IconHover').value}')`
      }} />
      <Selector id={props.name}
        properties={[props.name + 'Icon', props.name + 'IconHover', 
          'buttonWidth', 'buttonHeight']}
        position={{
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
        }} />
    </span>
  )
}

const TitleBar = (props) => {
  const context = useContext(WindowContext)

  const borderRadius = context.getProperty('topRadius').value

  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: context.getProperty('titlebarHeight').value,
    textAlign: context.getProperty('titleTextAlign').value,
    backgroundColor: context.getProperty('titlebarColor').value,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  }

  return (
    <div style={style}>
      <Selector id='titleBar'
        properties={['titlebarHeight', 'titlebarColor']}
        position={{
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
        }} />
      <p style={{
          margin: 0, 
          color: context.getProperty('titleTextColor').value,
          fontFamily: context.getProperty('font').value,
          fontSize: context.getProperty('titleTextSize').value
        }}>
          Title
      </p>
      <Selector id='windowTitle'
        properties={['titleTextAlign', 'titleTextSize', 'font']}
        position={{
          top: 1,
          bottom: 1,
          width: 30,
          left: '50%',
          transform: 'translate(-50%, 0%)',
        }} />
      <TitleBarButton name={'minimize'} />
      <TitleBarButton name={'maximize'} />
      <TitleBarButton name={'close'} />
      <Selector id='topLeftRadius'
        properties={['topRadius']}
        position={{
          left: -8,
          top: -8,
          width: 16,
          height: 16, 
        }} />
      <Selector id='topRightRadius'
        properties={['topRadius']}
        position={{
          right: -8,
          top: -8,
          width: 16,
          height: 16, 
        }} />
    </div>
  )
} 

const WindowSimulation = (props) => {
  const style = {
    ...props.position,
    position: 'absolute',
  }

  const border = 'solid ' + props.getProperty('borderWidth').value + ' '
    + props.getProperty('borderColor').value
  const borderRadius = props.getProperty('bottomRadius').value
  const titlebarHeight = props.getProperty('titlebarHeight').value
  
  const contentStyle = {
    position: 'absolute',
    top: titlebarHeight,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: props.getProperty('background').value,
    borderTop: 'none',
    borderLeft: border,
    borderRight: border,
    borderBottom: border,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  }

  return (
    <div style={style}>
      <WindowContext value={{
        getProperty: props.getProperty,
        selectProperties: props.selectProperties
      }}>
        <TitleBar />
        <div style={contentStyle}>
          <Selector id='windowArea'
            properties={['background']}
            position={{
              top: 2,
              left: 2,
              right: 2,
              bottom: 2,
            }} />
        </div>
        <Selector id='leftBorder'
          properties={['borderColor', 'borderWidth']}
          position={{
            top: titlebarHeight,
            left: -8,
            bottom: 'max(8px,' + borderRadius + ')',
            width: 16, 
          }} />
        <Selector id='rightBorder'
          properties={['borderColor', 'borderWidth']}
          position={{
            top: titlebarHeight,
            right: -8,
            bottom: 'max(8px,' + borderRadius + ')',
            width: 16, 
          }} />
        <Selector id='bottomBorder'
          properties={['borderColor', 'borderWidth']}
          position={{
            left: 'max(8px,' + borderRadius + ')',
            right: 'max(8px,' + borderRadius + ')',
            bottom: -8,
            height: 16, 
          }} />
        <Selector id='bottomLeftRadius'
          properties={['bottomRadius']}
          position={{
            left: -8,
            bottom: -8,
            width: 16,
            height: 16, 
          }} />
        <Selector id='bottomRightRadius'
          properties={['bottomRadius']}
          position={{
            right: -8,
            bottom: -8,
            width: 16,
            height: 16, 
          }} />
      </WindowContext>
    </div>
  )
}

export default WindowSimulation