
const defaultTitleBarColor = 'black'
const defaultTitleBarHeight = 20

const TitleBar = (props) => {
  const background = props.background ? props.background : defaultTitleBarColor
  const height = props.height ? props.height : defaultTitleBarHeight
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: background,
    height: height,
  }
  return (
    <div style={style}>
      
    </div>
  )
} 

const WindowSimulation = (props) => {
  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'gray',
  }
  return (
    <div style={style}>
      <TitleBar background={props.titleBarColor} height={props.titleBarHeight} />
    </div>
  )
}

export default WindowSimulation