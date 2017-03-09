import { Component, Children } from 'react'
import listen from 'simple-listen'
import { registerScrollListener, unregisterScrollListener } from './scrollRegistration'
import { getScrollPos } from './utils'
export default class extends Component {
  static defaultProps = {
    onScroll: () => {},
    onResize: () => {}
  }

  state = {
    winHeight: window.innerHeight,
    winWidth: window.innerWidth,
    scrollTop: 0
  }

  componentDidMount () {
    this.resizeListener = listen(window, 'resize', this.handleResize)
    registerScrollListener(this, this.handleScroll)
    this.handleScroll()
    this.handleResize()
  }

  componentWillUnmount () {
    (this.resizeListener && this.resizeListener())
    unregisterScrollListener(this)
  }

  render () {
    const { scrollTop, winHeight, winWidth } = this.state
    const { children } = this.props
    return children({ winHeight, winWidth, scrollTop })
  }

  handleResize = () => {
    const winHeight = window.innerHeight
    const winWidth = window.innerWidth
    this.setState({ winWidth, winHeight })
    this.props.onResize({ winHeight, winWidth })
  }

  handleScroll = () => {
    const scrollY = getScrollPos()
    this.setState({ scrollTop: scrollY })
    this.props.onScroll(scrollY)
  }
}
