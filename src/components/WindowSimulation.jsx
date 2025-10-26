const TitleBar = (props) => {
  const style = {
    ...props.style,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  }

  return (
    <div style={style}>
      
    </div>
  )
} 

const WindowSimulation = (props) => {
  const style = {
    ...props.position,
    position: 'fixed',
  }

  const contentStyle = {
    ...props.windowStyle,
    position: 'absolute',
    top: props.titleBarStyle.height,
    left: 0,
    right: 0,
    bottom: 0,
  }

  return (
    <div style={style}>
      <TitleBar style={props.titleBarStyle} />
      <div style={contentStyle}>

      </div>
    </div>
  )
}

export default WindowSimulation