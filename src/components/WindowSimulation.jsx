import './WindowSimulation.css'

const TitleBarButton = (props) => {

  const style = {
    ...props.style,
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
      <p style={{margin: 0, color: 'white'}}>Title</p>
      {
        props.style.buttons.map(button => (
          <TitleBarButton key={button.name} style={button} />)
        )
      }
    </div>
  )
} 

const WindowSimulation = (props) => {
  const style = {
    ...props.position,
    position: 'fixed',
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

      </div>
    </div>
  )
}

export default WindowSimulation