const defaultWindowBackground = 'white'
const defaultWindowBorder = 'solid 2px black'
const defaultMaximizedWindowBorder = 'none'
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
  const background = props.background ? props.background : defaultWindowBackground

  const style = {
    position: 'fixed',
  }

  const contentStyle = {
    position: 'absolute',
    top: props.titleBarHeight ? props.titleBarHeight : defaultTitleBarHeight,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: background,
    borderTopStyle: 'none',
  }

  if (props.maximized) {
    style.top = 0
    style.left = 0
    style.right = 0
    style.bottom = 0
    const border = props.border ? props.border : defaultMaximizedWindowBorder
    contentStyle.borderLeft = border
    contentStyle.borderRight = border
    contentStyle.borderBottom = border
  }
  else {
    style.top = 10
    style.left = 10
    style.right = 10
    style.bottom = 10
    const border = props.border ? props.border : defaultWindowBorder
    contentStyle.borderLeft = border
    contentStyle.borderRight = border
    contentStyle.borderBottom = border
  }

  return (
    <div style={style}>
      <TitleBar background={props.titleBarColor} height={props.titleBarHeight} />
      <div style={contentStyle}>

      </div>
    </div>
  )
}

export default WindowSimulation