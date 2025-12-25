import './WindowSimulation.css'

const Selector = (props) => {
  const style = {
    ...props.position,
    position: 'absolute',
    zIndex: 1,
    background: 'transparent',
  }
  return <div className='selector' style={style} id={props.id}></div>
}

const TitleBarButton = (props) => {

  const style = {
    ...props.style,
    position: 'absolute',
    background: `url('${props.style.image}')`,
  }
  delete style.name
  delete style.image
  delete style.hoverImage

  const hoverStyle = {
    ...style,
    background: `url('${props.style.hoverImage}')`
  }


  return (
    <span className='window-button'>
      <div className='normal' style={style} />
      <div className='hover' style={hoverStyle} />
      <Selector id={props.style.name}
        position={{
          top: style.top - 2,
          right: style.right - 2,
          width: style.width + 3,
          height: style.height + 3,
        }} />
    </span>
  )
}

const TitleBar = (props) => {
  const style = {
    ...props.style,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  }
  delete style.buttons

  return (
    <div style={style}>
      <Selector id='titleBar'
        position={{
          top: -2,
          left: -2,
          right: -2,
          height: style.height + 3,
        }} />
      <p style={{margin: 0, color: 'white'}}>Title</p>
      <Selector id='windowTitle'
        position={{
          top: 1,
          bottom: 1,
          width: 30,
          left: '50%',
          transform: 'translate(-50%, 0%)',
        }} />
      {
        props.style.buttons.map(button => (
          <TitleBarButton key={button.name} style={button} />)
        )
      }
      <Selector id='topLeftRadius'
        position={{
          left: -8,
          top: -8,
          width: 16,
          height: 16, 
        }} />
      <Selector id='topRightRadius'
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

  const contentStyle = {
    ...props.style,
    position: 'absolute',
    top: props.style.titleBar.height,
    left: 0,
    right: 0,
    bottom: 0,
  }
  delete contentStyle.titleBar

  return (
    <div style={style}>
      <TitleBar style={props.style.titleBar} />
      <div style={contentStyle}>
        <Selector id='windowArea'
          position={{
            top: 2,
            left: 2,
            right: 2,
            bottom: 2,
          }} />
      </div>
      <Selector id='leftBorder'
        position={{
          top: props.style.titleBar.height,
          left: -8,
          bottom: Math.max(8, props.style.borderBottomLeftRadius),
          width: 16, 
        }} />
      <Selector id='rightBorder'
        position={{
          top: props.style.titleBar.height,
          right: -8,
          bottom: Math.max(8, props.style.borderBottomLeftRadius),
          width: 16, 
        }} />
      <Selector id='bottomBorder'
        position={{
          left: Math.max(8, props.style.borderBottomLeftRadius),
          right: Math.max(8, props.style.borderBottomLeftRadius),
          bottom: -8,
          height: 16, 
        }} />
      <Selector id='bottomLeftRadius'
        position={{
          left: -8,
          bottom: -8,
          width: 16,
          height: 16, 
        }} />
      <Selector id='bottomRightRadius'
        position={{
          right: -8,
          bottom: -8,
          width: 16,
          height: 16, 
        }} />
    </div>
  )
}

export default WindowSimulation