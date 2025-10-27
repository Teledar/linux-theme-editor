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
      <p style={{margin: 0, color: 'white'}}>Title</p>
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